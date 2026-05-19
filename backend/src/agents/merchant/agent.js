import { Agent } from '@mariozechner/pi-agent-core';
import cron from 'node-cron';
import { query } from '../../config/database.js';
import { kimiModel } from '../registry.js';
import { dailyReportTool } from './skills/dailyReport.js';
import { trendAnalysisTool } from './skills/trendAnalysis.js';
import { inventoryAlertTool } from './skills/inventoryAlert.js';
import { exportDataTool } from './skills/exportData.js';

const SYSTEM_PROMPT = `你是「拉麵職人」的數據分析助理，負責協助商家掌握業績與庫存。
你可以存取訂單資料、庫存狀況和銷售趨勢，提供專業的分析報告。
請用繁體中文回答，報告格式清晰易讀，重點突出。`;

const TOOLS = [dailyReportTool, trendAnalysisTool, inventoryAlertTool, exportDataTool];

let merchantAgent = null;

const createAgent = () => new Agent({
  initialState: {
    systemPrompt: SYSTEM_PROMPT,
    model: kimiModel,
    tools: TOOLS,
  },
  getApiKey: async () => process.env.MOONSHOT_API_KEY || '',
});

const saveReport = async (type, content) => {
  const today = new Date().toISOString().slice(0, 10);
  await query(
    'INSERT INTO merchant_reports (report_date, type, content) VALUES (?, ?, ?)',
    [today, type, content]
  );
};

// Extract final text from agent transcript after prompt() resolves
const extractLastAssistantText = (agent) => {
  const messages = agent.state.messages;
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role === 'assistant') {
      return msg.content.filter(b => b.type === 'text').map(b => b.text).join('');
    }
  }
  return '';
};

export const runDailyReport = async () => {
  console.log('🤖 MerchantAgent: 開始生成每日報表...');
  // Create a fresh agent for each cron run to avoid state conflict
  const agent = createAgent();
  try {
    await agent.prompt('請生成昨天的每日業績報表，包含銷售總額、訂單數量和熱門商品。同時檢查庫存警報（閾值20）。');
    const content = extractLastAssistantText(agent);
    if (content) {
      await saveReport('daily_report', content);
      console.log('✅ MerchantAgent: 每日報表已儲存');
    }
  } catch (err) {
    console.error('❌ MerchantAgent cron 執行失敗:', err.message);
  }
};

export const initMerchantAgent = () => {
  merchantAgent = createAgent();
  cron.schedule('5 0 * * *', runDailyReport);
  console.log('🤖 MerchantAgent 已初始化，每日 00:05 自動生成報表');
  return merchantAgent;
};

export const getMerchantAgent = () => merchantAgent;
