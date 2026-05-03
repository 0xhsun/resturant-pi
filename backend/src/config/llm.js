/**
 * Moonshot Kimi LLM Configuration
 * 使用原生 fetch 調用 Kimi API
 * 文檔: https://platform.moonshot.ai/docs/api-reference
 */



// Moonshot Kimi API 配置
export const KIMI_CONFIG = {
  // API 端點
  baseURL: 'https://api.moonshot.cn/v1',
  
  // API Key
  apiKey: process.env.MOONSHOT_API_KEY,
  
  // 超時設定 (毫秒)
  timeout: 60000,
  
  // 請求頭
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
  },
};

// 可用的 Kimi 模型列表
export const KIMI_MODELS = {
  // Kimi K2.5 系列 - 最新多模態模型（推薦）
  KIMI_K2_0711_PREVIEW: 'kimi-k2-0711-preview',
  
  // Moonshot V1 系列
  MOONSHOT_V1_8K: 'moonshot-v1-8k',
  MOONSHOT_V1_32K: 'moonshot-v1-32k',
  MOONSHOT_V1_128K: 'moonshot-v1-128k',
  
  // 預設模型
  DEFAULT: 'kimi-k2-0711-preview',
};

// LLM 請求配置
export const llmOptions = {
  defaultModel: KIMI_MODELS.DEFAULT,
  defaultTemperature: 0.7,
  defaultMaxTokens: 2048,
  defaultTopP: 1,
};

// API 端點 URL
export const API_ENDPOINTS = {
  CHAT_COMPLETIONS: `${KIMI_CONFIG.baseURL}/chat/completions`,
  MODELS: `${KIMI_CONFIG.baseURL}/models`,
};

// 驗證配置
export function validateLLMConfig() {
  if (!process.env.MOONSHOT_API_KEY) {
    throw new Error('MOONSHOT_API_KEY 環境變數未設置');
  }
  return true;
}
