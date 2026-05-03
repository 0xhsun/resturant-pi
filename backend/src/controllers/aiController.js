import aiService from ../services/aiService.js;
import { success, errorResponse } from ../utils/response.js;

const getRecommendation = async (req, res) => {
  try {
    const { preferences, budget } = req.body;
    
    if (!preferences) {
      return res.status(400).json(errorResponse('請提供您的偏好'));
    }
    
    const recommendation = await aiService.getRecommendation(preferences, budget);
    
    res.json(success({ recommendation }));
  } catch (err) {
    console.error('AI 推薦失敗:', err);
    res.status(500).json(errorResponse(err.message || 'AI 推薦失敗'));
  }
};

const chat = async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json(errorResponse('請提供訊息'));
    }
    
    const reply = await aiService.chat(message, history || []);
    
    res.json(success({ reply }));
  } catch (err) {
    console.error('AI 對話失敗:', err);
    res.status(500).json(errorResponse(err.message || 'AI 對話失敗'));
  }
};

export {
  getRecommendation,
  chat
};
