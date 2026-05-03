/**
 * LLM Service - Moonshot Kimi Provider (原生 fetch 版本)
 * 提供與 Kimi AI 的對話功能
 */

import { KIMI_CONFIG, KIMI_MODELS, llmOptions, API_ENDPOINTS, validateLLMConfig } from '../config/llm.js';

/**
 * 帶超時的 fetch 請求
 * @param {string} url - 請求 URL
 * @param {Object} options - fetch 選項
 * @param {number} timeout - 超時時間 (毫秒)
 * @returns {Promise<Response>}
 */
async function fetchWithTimeout(url, options = {}, timeout = KIMI_CONFIG.timeout) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('請求超時');
    }
    throw error;
  }
}

/**
 * 解析 Kimi API 錯誤響應
 * @param {Response} response - fetch 響應對象
 * @returns {Promise<Error>}
 */
async function parseKimiError(response) {
  let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
  try {
    const errorData = await response.json();
    if (errorData.error) {
      errorMessage = errorData.error.message || errorData.error.code || JSON.stringify(errorData.error);
    }
  } catch (e) {
    // 無法解析 JSON，使用原始錯誤訊息
  }
  return new Error(errorMessage);
}

/**
 * 發送聊天請求到 Kimi API
 * @param {Array} messages - 消息陣列 [{ role: 'user'|'assistant'|'system', content: string }]
 * @param {Object} options - 可選配置
 * @returns {Promise<Object>} API 響應
 */
export async function chatCompletion(messages, options = {}) {
  validateLLMConfig();
  
  const {
    model = llmOptions.defaultModel,
    temperature = llmOptions.defaultTemperature,
    maxTokens = llmOptions.defaultMaxTokens,
    topP = llmOptions.defaultTopP,
    stream = false,
    tools,
    toolChoice,
  } = options;

  // 構建請求體
  const requestBody = {
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    top_p: topP,
    stream,
  };

  // 可選參數
  if (tools) {
    requestBody.tools = tools;
  }
  if (toolChoice) {
    requestBody.tool_choice = toolChoice;
  }

  try {
    const response = await fetchWithTimeout(API_ENDPOINTS.CHAT_COMPLETIONS, {
      method: 'POST',
      headers: KIMI_CONFIG.getHeaders(),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw await parseKimiError(response);
    }

    const data = await response.json();

    return {
      success: true,
      data,
      model: data.model,
      choices: data.choices,
      usage: data.usage,
    };
  } catch (error) {
    console.error('Kimi API 調用失敗:', error);
    return {
      success: false,
      error: error.message,
      code: error.code || 'UNKNOWN_ERROR',
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
  validateLLMConfig();
  
  const {
    model = llmOptions.defaultModel,
    temperature = llmOptions.defaultTemperature,
    maxTokens = llmOptions.defaultMaxTokens,
    topP = llmOptions.defaultTopP,
  } = options;

  const requestBody = {
    model,
    messages,
    temperature,
    max_tokens: maxTokens,
    top_p: topP,
    stream: true,
  };

  try {
    const response = await fetchWithTimeout(API_ENDPOINTS.CHAT_COMPLETIONS, {
      method: 'POST',
      headers: KIMI_CONFIG.getHeaders(),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw await parseKimiError(response);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        yield { done: true };
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || ''; // 保留未完成的行

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine || trimmedLine === 'data: [DONE]') {
          if (trimmedLine === 'data: [DONE]') {
            yield { done: true };
            return;
          }
          continue;
        }

        if (trimmedLine.startsWith('data: ')) {
          try {
            const jsonData = JSON.parse(trimmedLine.slice(6));
            const content = jsonData.choices?.[0]?.delta?.content || '';
            
            if (content) {
              yield {
                content,
                done: false,
              };
            }
          } catch (e) {
            // 忽略無法解析的行
          }
        }
      }
    }
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
  validateLLMConfig();

  try {
    const response = await fetchWithTimeout(API_ENDPOINTS.MODELS, {
      method: 'GET',
      headers: KIMI_CONFIG.getHeaders(),
    });

    if (!response.ok) {
      throw await parseKimiError(response);
    }

    const data = await response.json();
    
    return {
      success: true,
      models: data.data.map(model => ({
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

function getModelDescription(modelId) {
  const descriptions = {
    'kimi-k2-0711-preview': 'Kimi K2.5 多模態模型 - 最新最強大的模型，支持圖像理解',
    'moonshot-v1-8k': 'Moonshot V1 8K - 標準上下文長度模型',
    'moonshot-v1-32k': 'Moonshot V1 32K - 長上下文模型',
    'moonshot-v1-128k': 'Moonshot V1 128K - 超長上下文模型',
  };
  return descriptions[modelId] || 'Kimi 模型';
}
