# Moonshot Kimi API 配置指南 (OpenAI SDK)

## 概述

本專案使用 [Moonshot AI](https://platform.kimi.ai) 的 Kimi API 作為 AI 服務提供商。

**重要**: 我們使用官方的 `openai@latest` SDK 來調用 Kimi API，因為 Kimi API 與 OpenAI API 完全兼容。

## 安裝

```bash
cd backend
npm install openai@latest
```

## 獲取 API Key

1. 訪問 [Kimi 開放平台](https://platform.kimi.ai)
2. 註冊並登入帳號
3. 進入「API Key 管理」頁面
4. 創建新的 API Key
5. 複製並保存 API Key（只會顯示一次）

## 配置環境變數

在 `backend/.env` 文件中設置：

```bash
# Moonshot Kimi API
MOONSHOT_API_KEY=your_moonshot_api_key_here
```

## 可用模型

| 模型名稱 | 說明 | temperature | top_p | 推薦用途 |
|---------|------|-------------|-------|---------|
| `kimi-k2.6` | **預設推薦** - 最新最強大多模態模型 | 固定為 1 | 固定為 0.95 | 通用對話、推薦、分析 |
| `kimi-k2-thinking` | 具備強大思考能力的模型 | 固定為 1 | 固定為 0.95 | 複雜推理、數學、程式設計 |
| `kimi-k2.5` | Kimi K2.5 系列 | 固定為 1 | 固定為 0.95 | 多模態任務 |
| `moonshot-v1-8k` | 標準上下文模型 | 0-2 | 固定為 1 | 簡短對話 |
| `moonshot-v1-32k` | 長上下文模型 | 0-2 | 固定為 1 | 長文檔處理 |
| `moonshot-v1-128k` | 超長上下文模型 | 0-2 | 固定為 1 | 超大文檔分析 |

### 重要參數限制

**kimi-k2.6 / kimi-k2-thinking:**
- `temperature`: 必須設為 `1`（不可修改）
- `top_p`: 必須設為 `0.95`（不可修改）

**moonshot-v1 系列:**
- `temperature`: 可在 0-2 範圍內調整
- `top_p`: 固定為 `1`

## 使用方式

### 方式 1: 使用服務層 (推薦)

```javascript
import { simpleChat, chatCompletion, streamChat } from './services/llmService.js';

// 簡易對話
const response = await simpleChat('推薦一款拉麵', {
  systemPrompt: '你是一個拉麵店助手',
  temperature: 0.7  // 會自動調整為模型支持的值
});

// 多輪對話
const result = await chatCompletion([
  { role: 'system', content: '你是一個專業助手' },
  { role: 'user', content: '推薦一款拉麵' }
], {
  model: 'kimi-k2.6',
  maxTokens: 500
});

// 流式對話
const stream = streamChat(messages, { temperature: 0.7 });
for await (const chunk of stream) {
  if (!chunk.done) {
    process.stdout.write(chunk.content);
  }
}
```

### 方式 2: 直接使用 OpenAI SDK

```javascript
import { kimiClient } from './config/kimi-openai.js';

// 注意: kimi-k2.6 的 temperature 必須為 1, top_p 必須為 0.95
const completion = await kimiClient.chat.completions.create({
  model: 'kimi-k2.6',
  messages: [
    { role: 'system', content: '你是一個專業的拉麵店助手' },
    { role: 'user', content: '什麼是豚骨拉麵？' }
  ],
  temperature: 1,    // kimi-k2.6 固定為 1
  top_p: 0.95,       // kimi-k2.6 固定為 0.95
  max_tokens: 150,
});

console.log(completion.choices[0].message.content);
```

## API 端點

```
https://api.moonshot.ai/v1
```

## 測試連接

```bash
cd backend
node scripts/test-llm.js
```

## 參數說明

| 參數 | 類型 | 預設值 | 說明 |
|-----|------|-------|------|
| `model` | string | `kimi-k2.6` | 模型名稱 |
| `temperature` | number | `0.7` | 創意度 (0-2)，會根據模型自動調整 |
| `maxTokens` | number | `2048` | 最大生成 token 數 |
| `topP` | number | `1` | 核採樣，會根據模型自動調整 |
| `stream` | boolean | `false` | 是否流式輸出 |

## 專案結構

```
backend/
├── src/
│   ├── config/
│   │   └── kimi-openai.js    # OpenAI SDK 配置
│   ├── services/
│   │   ├── llmService.js     # LLM 服務 (推薦使用)
│   │   └── aiService.js      # AI 業務邏輯
│   └── routes/
│       ├── llm.js            # LLM API 路由
│       └── ai.js             # AI 業務路由
└── scripts/
    └── test-llm.js           # 測試腳本
```

## 官方文檔

- [Kimi API 文檔](https://platform.kimi.ai/docs/api/overview)
- [從 OpenAI 遷移](https://platform.kimi.ai/docs/guide/migrating-from-openai-to-kimi)
- [模型列表](https://platform.kimi.ai/docs/models)
- [模型參數限制](https://platform.kimi.ai/docs/api/models-overview)
- [價格說明](https://platform.kimi.ai/docs/pricing)

## 故障排除

### Invalid Authentication
```
錯誤: 401 Invalid Authentication
```
- 確認 API Key 正確設置在 `backend/.env` 中
- 確認 API Key 沒有過期或被撤銷

### Temperature/Top_p 錯誤
```
錯誤: 400 invalid temperature: only 1 is allowed for this model
錯誤: 400 invalid top_p: only 0.95 is allowed for this model
```
- kimi-k2.6 模型要求 `temperature: 1` 和 `top_p: 0.95`
- 使用 `llmService.js` 會自動處理這些限制

### 模型不存在
```
錯誤: 404 model_not_found
```
- 確認使用正確的模型名稱（如 `kimi-k2.6` 而非舊版 `kimi-k2-0711-preview`）
- Kimi K2 舊模型已於 2025/05/25 停止服務

### 請求超時
- 增加 `maxTokens` 來控制生成長度
- 流式輸出 (`stream: true`) 可以改善響應時間