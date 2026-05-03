/**
 * Moonshot Kimi Configuration - OpenAI SDK Version
 * 使用 OpenAI SDK v4 調用 Kimi API
 * 
 * 官方文檔: https://platform.kimi.ai/docs/guide/migrating-from-openai-to-kimi
 * 
 * Kimi API 與 OpenAI API 完全兼容，只需修改 baseURL 和 apiKey
 */

import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

// 驗證 API Key
export function validateApiKey() {
  if (!process.env.MOONSHOT_API_KEY) {
    console.error('❌ MOONSHOT_API_KEY 環境變數未設置');
    return false;
  }
  return true;
}

// 創建 OpenAI 客戶端（指向 Kimi API）
export const kimiClient = new OpenAI({
  apiKey: process.env.MOONSHOT_API_KEY,
  baseURL: 'https://api.moonshot.ai/v1',
});

// 可用的 Kimi 模型列表
export const KIMI_MODELS = {
  // Kimi K2.6 系列 - 最新最強大多模態模型（推薦）
  // 注意: temperature 固定為 1，不可修改
  KIMI_K2_6: 'kimi-k2.6',
  
  // Kimi K2.5 系列
  KIMI_K2_5: 'kimi-k2.5',
  
  // Kimi K2 思考模型
  KIMI_K2_THINKING: 'kimi-k2-thinking',
  
  // Moonshot V1 系列 - temperature 可調整
  MOONSHOT_V1_8K: 'moonshot-v1-8k',
  MOONSHOT_V1_32K: 'moonshot-v1-32k',
  MOONSHOT_V1_128K: 'moonshot-v1-128k',
  
  // 預設模型
  DEFAULT: 'kimi-k2.6',
};

// 模型參數限制配置
// 參考: https://platform.kimi.ai/docs/api/models-overview
export const MODEL_CONSTRAINTS = {
  'kimi-k2.6': {
    temperature: { fixed: true, value: 1 },
    top_p: { fixed: true, value: 0.95 },
    description: 'temperature 固定為 1，top_p 固定為 0.95',
  },
  'kimi-k2-thinking': {
    temperature: { fixed: true, value: 1 },
    top_p: { fixed: true, value: 0.95 },
    description: 'temperature 固定為 1，top_p 固定為 0.95',
  },
  'moonshot-v1-8k': {
    temperature: { min: 0, max: 2, default: 0.7 },
    top_p: { fixed: true, value: 1 },
  },
  'moonshot-v1-32k': {
    temperature: { min: 0, max: 2, default: 0.7 },
    top_p: { fixed: true, value: 1 },
  },
  'moonshot-v1-128k': {
    temperature: { min: 0, max: 2, default: 0.7 },
    top_p: { fixed: true, value: 1 },
  },
};

/**
 * 獲取模型有效的 temperature 值
 * @param {string} modelId - 模型 ID
 * @param {number} requestedTemp - 請求的 temperature
 * @returns {number} 有效的 temperature
 */
export function getValidTemperature(modelId, requestedTemp = 0.7) {
  const constraints = MODEL_CONSTRAINTS[modelId];
  if (!constraints || !constraints.temperature) {
    return requestedTemp;
  }
  
  if (constraints.temperature.fixed) {
    return constraints.temperature.value;
  }
  
  const { min, max } = constraints.temperature;
  return Math.max(min, Math.min(max, requestedTemp));
}

/**
 * 獲取模型有效的 top_p 值
 * @param {string} modelId - 模型 ID
 * @param {number} requestedTopP - 請求的 top_p
 * @returns {number} 有效的 top_p
 */
export function getValidTopP(modelId, requestedTopP = 1) {
  const constraints = MODEL_CONSTRAINTS[modelId];
  if (!constraints || !constraints.top_p) {
    return requestedTopP;
  }
  
  if (constraints.top_p.fixed) {
    return constraints.top_p.value;
  }
  
  return requestedTopP;
}

// LLM 請求配置
export const llmOptions = {
  defaultModel: KIMI_MODELS.DEFAULT,
  defaultTemperature: 0.7,
  defaultMaxTokens: 2048,
  defaultTopP: 1,
};

// 模型描述
export function getModelDescription(modelId) {
  const descriptions = {
    'kimi-k2.6': 'Kimi K2.6 - 最新最強大多模態模型，Agent、代碼、視覺理解能力業界領先 (temperature=1 固定)',
    'kimi-k2.5': 'Kimi K2.5 - 多模態模型',
    'kimi-k2-thinking': 'Kimi K2 Thinking - 具備強大思考能力的模型 (temperature=1 固定)',
    'moonshot-v1-8k': 'Moonshot V1 8K - 標準上下文長度模型',
    'moonshot-v1-32k': 'Moonshot V1 32K - 長上下文模型',
    'moonshot-v1-128k': 'Moonshot V1 128K - 超長上下文模型',
  };
  return descriptions[modelId] || 'Kimi 模型';
}
