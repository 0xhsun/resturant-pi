// Kimi model config for @mariozechner/pi-ai's openai-completions provider
export const kimiModel = {
  id: 'kimi-k2.6',
  name: 'Kimi K2.6',
  api: 'openai-completions',
  provider: 'moonshot',
  baseUrl: 'https://api.moonshot.ai/v1',
  reasoning: false,
  input: ['text'],
  cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
  contextWindow: 128000,
  maxTokens: 4096,
};
