/**
 * AI API Routes - 兼容前端調用
 * 映射 /api/ai/* 到 llmService
 */

import { Router } from 'express';
import { simpleChat, chatCompletion } from '../services/llmService.js';
import { getAllMenus } from '../services/menuService.js';

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
 * AI 推薦接口 - 根據偏好從菜單中選出推薦項目
 */
router.post('/recommend', async (req, res) => {
  try {
    const { taste, spicy, dietary, notes, budget } = req.body;

    // 取得菜單資料
    const menus = await getAllMenus();
    const available = budget ? menus.filter(m => m.price <= Number(budget)) : menus;

    if (available.length === 0) {
      return res.status(400).json({ success: false, error: '預算內無可用菜單' });
    }

    // 組合偏好描述
    const spicyLabel = ['不辣', '微辣', '中辣', '大辣'][spicy] ?? '不辣';
    const prefParts = [
      taste?.length ? `口味偏好：${taste.join('、')}` : '',
      `辣度：${spicyLabel}`,
      dietary?.length ? `飲食限制：${dietary.join('、')}` : '',
      notes ? `其他需求：${notes}` : '',
    ].filter(Boolean);

    const menuListJson = JSON.stringify(
      available.map(m => ({ id: m.id, name: m.name, description: m.description, price: m.price }))
    );

    const prompt = `你是拉麵店推薦助手。根據以下顧客偏好，從菜單中選出最適合的拉麵。

顧客偏好：${prefParts.join('，') || '無特殊偏好'}
${budget ? `預算上限：${budget} 元` : ''}

可選菜單（JSON）：
${menuListJson}

請只回覆以下 JSON，不要加任何 markdown 或說明文字：
{
  "mainId": <主推薦的菜單 id（數字）>,
  "reason": "<推薦理由，繁體中文，2-3句>",
  "alternativeIds": [<最多2個備選菜單 id>],
  "alternativeReasons": ["<備選1理由>", "<備選2理由>"]
}`;

    const messages = [
      { role: 'system', content: '你是拉麵店推薦助手。只回覆純 JSON，不要 markdown 或任何額外文字。' },
      { role: 'user', content: prompt },
    ];
    // 使用 moonshot-v1-8k：對 JSON 格式指令遵循更穩定
    const llmResult = await chatCompletion(messages, {
      model: 'moonshot-v1-8k',
      temperature: 0.3,
      maxTokens: 500,
    });

    console.log('[AI Recommend] LLM result success:', llmResult.success);
    if (!llmResult.success) {
      throw new Error(llmResult.error || 'LLM 呼叫失敗');
    }

    const content = llmResult.choices?.[0]?.message?.content || '';
    console.log('[AI Recommend] raw content:', JSON.stringify(content));

    if (!content) {
      throw new Error('LLM 回傳內容為空，請確認 MOONSHOT_API_KEY 是否正確');
    }

    // 解析 LLM 回覆的 JSON
    let parsed;
    try {
      const jsonStr = content.replace(/```(?:json)?\n?/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(jsonStr);
      console.log('[AI Recommend] parsed:', JSON.stringify(parsed));
    } catch (parseErr) {
      console.error('[AI Recommend] JSON parse 失敗，raw:', content, parseErr.message);
      // 嘗試用 regex 萃取 mainId
      const idMatch = content.match(/"mainId"\s*:\s*(\d+)/);
      const reasonMatch = content.match(/"reason"\s*:\s*"([^"]+)"/);
      parsed = {
        mainId: idMatch ? parseInt(idMatch[1]) : available[0].id,
        reason: reasonMatch ? reasonMatch[1] : content,
        alternativeIds: [],
        alternativeReasons: [],
      };
    }

    const mainMenu = menus.find(m => m.id === parsed.mainId) || available[0];
    const alternatives = (parsed.alternativeIds || [])
      .map((id, i) => {
        const m = menus.find(m => m.id === id);
        if (!m) return null;
        return {
          id: m.id,
          name: m.name,
          price: m.price,
          image: m.image,
          reason: parsed.alternativeReasons?.[i] || '',
        };
      })
      .filter(Boolean);

    res.json({
      success: true,
      data: {
        menu: {
          id: mainMenu.id,
          name: mainMenu.name,
          description: mainMenu.description,
          price: mainMenu.price,
          image: mainMenu.image,
          isPopular: mainMenu.isPopular,
        },
        reason: parsed.reason || '',
        alternatives,
      },
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
