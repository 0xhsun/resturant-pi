/**
 * AI API Routes - 兼容前端調用
 * 映射 /api/ai/* 到 llmService
 */

import { Router } from 'express';
import { simpleChat } from '../services/llmService.js';

const router = Router();

/**
 * POST /api/ai/chat
 * 前端 AI 聊天接口
 */
router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'message 為必填項',
      });
    }

    const content = await simpleChat(message, {
      systemPrompt: '你是一個拉麵店助手，專門回答關於拉麵、菜單、訂單的問題。請用繁體中文回答。',
    });

    res.json({
      success: true,
      reply: content,
    });
  } catch (error) {
    console.error('AI Chat API 錯誤:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/**
 * POST /api/ai/recommend
 * AI 推薦接口 (placeholder)
 */
router.post('/recommend', async (req, res) => {
  try {
    const { preferences, budget } = req.body;

    const prompt = `請根據以下偏好推薦拉麵：${preferences || '無特殊偏好'}，預算：${budget || '不限'}。
請簡短推薦 1-2 款適合的拉麵。`;

    const content = await simpleChat(prompt, {
      systemPrompt: '你是一個拉麵店推薦助手，根據顧客喜好推薦最適合的拉麵。請用繁體中文回答。',
    });

    res.json({
      success: true,
      recommendations: content,
    });
  } catch (error) {
    console.error('AI Recommend API 錯誤:', error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;
