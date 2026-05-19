import { Router } from 'express';
import { getCustomerAgent, persistCustomerSession } from '../agents/customer/agent.js';
import { getMerchantAgent, runDailyReport } from '../agents/merchant/agent.js';
import { query } from '../config/database.js';

export const customerRouter = Router();
export const merchantRouter = Router();

// POST /api/ai/customer/chat — SSE streaming conversation
customerRouter.post('/chat', async (req, res) => {
  const { sessionId, message } = req.body;
  if (!sessionId || !message) {
    return res.status(400).json({ success: false, error: 'sessionId 和 message 為必填' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  let agent;
  try {
    agent = await getCustomerAgent(sessionId);
  } catch (err) {
    res.write(`data: ${JSON.stringify({ type: 'error', message: '無法建立 Agent' })}\n\n`);
    return res.end();
  }

  const unsubscribe = agent.subscribe(async (event) => {
    if (event.type === 'message_update') {
      const e = event.assistantMessageEvent;
      if (e.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ type: 'delta', text: e.delta })}\n\n`);
      }
    }
    if (event.type === 'tool_execution_start') {
      res.write(`data: ${JSON.stringify({ type: 'tool_start', name: event.toolName })}\n\n`);
    }
    if (event.type === 'tool_execution_end') {
      res.write(`data: ${JSON.stringify({ type: 'tool_end', name: event.toolName })}\n\n`);
    }
    if (event.type === 'agent_end') {
      await persistCustomerSession(sessionId);
      res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
      res.end();
    }
  });

  req.on('close', () => {
    agent.abort();
    unsubscribe();
  });

  try {
    await agent.prompt(message);
  } catch (err) {
    unsubscribe();
    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ type: 'error', message: err.message })}\n\n`);
      res.end();
    }
  }
});

// POST /api/ai/merchant/chat — on-demand SSE conversation with merchant agent
merchantRouter.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ success: false, error: 'message 為必填' });
  }

  const agent = getMerchantAgent();
  if (!agent) {
    return res.status(503).json({ success: false, error: 'MerchantAgent 尚未初始化' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const unsubscribe = agent.subscribe(async (event) => {
    if (event.type === 'message_update') {
      const e = event.assistantMessageEvent;
      if (e.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ type: 'delta', text: e.delta })}\n\n`);
      }
    }
    if (event.type === 'tool_execution_start') {
      res.write(`data: ${JSON.stringify({ type: 'tool_start', name: event.toolName })}\n\n`);
    }
    if (event.type === 'tool_execution_end') {
      res.write(`data: ${JSON.stringify({ type: 'tool_end', name: event.toolName })}\n\n`);
    }
    if (event.type === 'agent_end') {
      res.write(`data: ${JSON.stringify({ type: 'done' })}\n\n`);
      res.end();
    }
  });

  req.on('close', () => {
    agent.abort();
    unsubscribe();
  });

  try {
    await agent.prompt(message);
  } catch (err) {
    unsubscribe();
    if (!res.writableEnded) {
      res.write(`data: ${JSON.stringify({ type: 'error', message: err.message })}\n\n`);
      res.end();
    }
  }
});

// GET /api/ai/merchant/reports — list stored cron reports
merchantRouter.get('/reports', async (req, res) => {
  const { date, type, limit = 20 } = req.query;
  let sql = 'SELECT id, report_date, type, content, created_at FROM merchant_reports WHERE 1=1';
  const params = [];
  if (date) { sql += ' AND report_date = ?'; params.push(date); }
  if (type) { sql += ' AND type = ?'; params.push(type); }
  sql += ` ORDER BY created_at DESC LIMIT ${parseInt(limit)}`;

  try {
    const reports = await query(sql, params);
    res.json({ success: true, data: reports });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/ai/merchant/trigger — manually fire the daily report (testing)
merchantRouter.post('/trigger', async (req, res) => {
  try {
    runDailyReport(); // fire and forget — don't await so response is immediate
    res.json({ success: true, message: '每日報表已觸發，稍後可透過 GET /reports 查看結果' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
