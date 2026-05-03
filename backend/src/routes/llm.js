/**
 * LLM API Routes - Moonshot Kimi Provider
 */

import { Router } from 'express';
import { chatCompletion, simpleChat, streamChat, getAvailableModels } from '../services/llmService.js';

const router = Router();

/**
 * POST /api/llm/chat
 * 標準聊天接口
 */
router.post('/chat', async (req, res) => {
  try {
    const { messages, model, temperature, maxTokens, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        error: 'messages 必須是陣列格式',
      });
    }

    // 如果有 systemPrompt，插入到 messages 開頭
    let finalMessages = messages;
    if (systemPrompt && !messages.some(m => m.role === 'system')) {
      finalMessages = [{ role: 'system', content: systemPrompt }, ...messages];
    }

    const result = await chatCompletion(finalMessages, {
      model,
      temperature,
      maxTokens,
    });

    if (!result.success) {
      return res.status(500).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('Chat API 錯誤:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * POST /api/llm/simple-chat
 * 簡易單輪對話接口
 */
router.post('/simple-chat', async (req, res) => {
  try {
    const { prompt, systemPrompt, model, temperature } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: 'prompt 為必填項',
      });
    }

    const content = await simpleChat(prompt, {
      systemPrompt,
      model,
      temperature,
    });

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Simple Chat API 錯誤:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * POST /api/llm/stream
 * 流式對話接口（Server-Sent Events）
 */
router.post('/stream', async (req, res) => {
  try {
    const { messages, model, temperature, maxTokens, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        error: 'messages 必須是陣列格式',
      });
    }

    // 設置 SSE 響應頭
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 如果有 systemPrompt，插入到 messages 開頭
    let finalMessages = messages;
    if (systemPrompt && !messages.some(m => m.role === 'system')) {
      finalMessages = [{ role: 'system', content: systemPrompt }, ...messages];
    }

    const stream = streamChat(finalMessages, {
      model,
      temperature,
      maxTokens,
    });

    for await (const chunk of stream) {
      if (chunk.done) {
        res.write('data: [DONE]\n\n');
      } else {
        res.write(`data: ${JSON.stringify(chunk)}\n\n`);
      }
    }

    res.end();
  } catch (error) {
    console.error('Stream API 錯誤:', error);
    res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
    res.end();
  }
});

/**
 * GET /api/llm/models
 * 獲取可用模型列表
 */
router.get('/models', async (req, res) => {
  try {
    const models = await getAvailableModels();
    res.json(models);
  } catch (error) {
    console.error('Models API 錯誤:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
