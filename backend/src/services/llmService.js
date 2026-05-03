/**
 * LLM Service - Moonshot Kimi Provider (OpenAI SDK 版本)
 * 使用 OpenAI SDK v4 調用 Kimi API
 * 
 * 官方文檔: https://platform.kimi.ai/docs/guide/migrating-from-openai-to-kimi
 * 推薦模型: kimi-k2.6 (最新最強大多模態模型)
 */

import {
  kimiClient,
  validateApiKey,
  llmOptions,
  KIMI_MODELS,
  getModelDescription,
  getValidTemperature,
  getValidTopP
} from '../config/kimi-openai.js';

/**
 * 發送聊天請求到 Kimi API
 * @param {Array} messages - 消息陣列 [{ role: 'user'|'assistant'|'system', content: string }]
 * @param {Object} options - 可選配置
 * @returns {Promise<Object>} API 響應
 */
export async function chatCompletion(messages, options = {}) {
  if (!validateApiKey()) {
    return {
      success: false,
      error: 'MOONSHOT_API_KEY 環境變數未設置',
      code: 'API_KEY_MISSING',
    };
  }

  const model = options.model || llmOptions.defaultModel;
  
  // 根據模型限制調整參數
  const temperature = getValidTemperature(model, options.temperature ?? llmOptions.defaultTemperature);
  const topP = getValidTopP(model, options.topP ?? llmOptions.defaultTopP);
  const maxTokens = options.maxTokens || llmOptions.defaultMaxTokens;
  const stream = options.stream || false;

  try {
    const requestParams = {
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
      top_p: topP,
      stream,
    };

    // 可選參數
    if (options.tools) {
      requestParams.tools = options.tools;
    }
    if (options.toolChoice) {
      requestParams.tool_choice = options.toolChoice;
    }

    const completion = await kimiClient.chat.completions.create(requestParams);

    return {
      success: true,
      data: completion,
      model: completion.model,
      choices: completion.choices,
      usage: completion.usage,
    };
  } catch (error) {
    console.error('Kimi API 調用失敗:', error);
    return {
      success: false,
      error: error.message || 'Unknown error',
      code: error.code || 'API_ERROR',
    };
  }
}

/**
 * 單輪對話（簡易接口）
 * @param {string} prompt - 用戶輸入
 * @param {Object} options - 可選配置
 * @returns {Promise<string>} AI 回覆內容
 */
export async function simpleChat(prompt, options = {}) {
  const messages = [
    { role: 'system', content: options.systemPrompt || '你是一個有用的助手。' },
    { role: 'user', content: prompt },
  ];

  const result = await chatCompletion(messages, options);

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.choices[0]?.message?.content || '';
}

/**
 * 流式對話（SSE 流）
 * @param {Array} messages - 消息陣列
 * @param {Object} options - 可選配置
 * @returns {AsyncGenerator} 流式響應生成器
 */
export async function* streamChat(messages, options = {}) {
  if (!validateApiKey()) {
    throw new Error('MOONSHOT_API_KEY 環境變數未設置');
  }

  const model = options.model || llmOptions.defaultModel;
  
  // 根據模型限制調整參數
  const temperature = getValidTemperature(model, options.temperature ?? llmOptions.defaultTemperature);
  const topP = getValidTopP(model, options.topP ?? llmOptions.defaultTopP);
  const maxTokens = options.maxTokens || llmOptions.defaultMaxTokens;

  try {
    const stream = await kimiClient.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
      top_p: topP,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      
      if (content) {
        yield {
          content,
          done: false,
        };
      }
      
      if (chunk.choices[0]?.finish_reason) {
        yield { done: true };
        return;
      }
    }

    yield { done: true };
  } catch (error) {
    console.error('Kimi 流式 API 調用失敗:', error);
    throw error;
  }
}

/**
 * 獲取模型列表
 * @returns {Promise<Object>} 可用模型列表
 */
export async function getAvailableModels() {
  if (!validateApiKey()) {
    return {
      success: false,
      error: 'MOONSHOT_API_KEY 環境變數未設置',
      code: 'API_KEY_MISSING',
    };
  }

  try {
    const response = await kimiClient.models.list();

    return {
      success: true,
      models: response.data.map(model => ({
        id: model.id,
        name: model.id,
        object: model.object,
        owned_by: model.owned_by,
      })),
      default: llmOptions.defaultModel,
    };
  } catch (error) {
    console.error('獲取模型列表失敗:', error);
    // 返回預設模型列表作為備用
    return {
      success: true,
      models: Object.entries(KIMI_MODELS)
        .filter(([key]) => key !== 'DEFAULT')
        .map(([key, value]) => ({
          id: value,
          name: key,
          description: getModelDescription(value),
        })),
      default: llmOptions.defaultModel,
    };
  }
}
