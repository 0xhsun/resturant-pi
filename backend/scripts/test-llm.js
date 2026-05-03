/**
 * 測試 Moonshot Kimi LLM 調用 (OpenAI SDK 版本)
 * 用法: node scripts/test-llm.js
 */

import dotenv from 'dotenv';
dotenv.config();

import { 
  chatCompletion, 
  simpleChat, 
  getAvailableModels 
} from '../src/services/llmService.js';
import { kimiClient, validateApiKey } from '../src/config/kimi-openai.js';

async function testConnection() {
  console.log('🔌 測試 Kimi API 連接...\n');
  try {
    const isValid = validateApiKey();
    if (!isValid) {
      console.error('❌ API Key 未配置');
      return false;
    }
    console.log('✅ API Key 已配置');
    console.log(`📡 使用端點: https://api.moonshot.ai/v1`);
    return true;
  } catch (error) {
    console.error('❌ 連接測試失敗:', error.message);
    return false;
  }
}

async function testModels() {
  console.log('\n🔄 測試獲取模型列表...\n');
  try {
    const result = await getAvailableModels();
    if (result.success) {
      console.log('✅ 可用模型列表:');
      result.models.forEach(m => {
        const isDefault = m.id === result.default ? ' (預設)' : '';
        console.log(`   - ${m.id}${isDefault}`);
        if (m.description) console.log(`     ${m.description}`);
      });
    } else {
      console.error('❌ 獲取模型列表失敗:', result.error);
    }
  } catch (error) {
    console.error('❌ 測試失敗:', error.message);
  }
}

async function testSimpleChat() {
  console.log('\n🔄 測試簡易對話...\n');
  try {
    const response = await simpleChat(
      '請用一句話介紹日式拉麵的特色',
      { 
        systemPrompt: '你是一個專業的拉麵店助手，請用繁體中文回答。',
        maxTokens: 100 
      }
    );
    console.log('✅ AI 回應:', response);
  } catch (error) {
    console.error('❌ 測試失敗:', error.message);
  }
}

async function testChatCompletion() {
  console.log('\n🔄 測試標準對話 API...\n');
  try {
    const messages = [
      { role: 'system', content: '你是一個親切的拉麵店助手，用繁體中文回答。' },
      { role: 'user', content: '請推薦一款適合初學者的拉麵' }
    ];
    
    const result = await chatCompletion(messages, { maxTokens: 150 });
    
    if (result.success) {
      console.log('✅ 對話成功!');
      console.log('   模型:', result.model);
      console.log('   回應:', result.choices[0]?.message?.content);
      console.log('   Token 使用量:', JSON.stringify(result.usage));
    } else {
      console.error('❌ 對話失敗:', result.error);
    }
  } catch (error) {
    console.error('❌ 測試失敗:', error.message);
  }
}

async function testDirectSDK() {
  console.log('\n🔄 測試直接使用 OpenAI SDK (使用正確參數)...\n');
  try {
    // 注意: kimi-k2.6 的 temperature 必須為 1, top_p 必須為 0.95
    const completion = await kimiClient.chat.completions.create({
      model: 'kimi-k2.6',
      messages: [
        { role: 'system', content: '你是一個專業的拉麵店助手，用繁體中文回答。' },
        { role: 'user', content: '什麼是豚骨拉麵？' }
      ],
      temperature: 1,  // kimi-k2.6 固定為 1
      top_p: 0.95,     // kimi-k2.6 固定為 0.95
      max_tokens: 150,
    });
    
    console.log('✅ 直接 SDK 調用成功!');
    console.log('   模型:', completion.model);
    console.log('   回應:', completion.choices[0]?.message?.content);
  } catch (error) {
    console.error('❌ 直接 SDK 調用失敗:', error.message);
    if (error.code) console.error('   錯誤碼:', error.code);
    if (error.type) console.error('   錯誤類型:', error.type);
  }
}

// 執行測試
async function runTests() {
  console.log('🚀 Moonshot Kimi LLM 測試開始 (OpenAI SDK 版本)\n');
  console.log('📦 SDK: openai@latest');
  console.log('🔑 API Key:', process.env.MOONSHOT_API_KEY ? '已配置 ✅' : '未配置 ❌');
  console.log('');

  if (!process.env.MOONSHOT_API_KEY) {
    console.error('❌ 請先設置 MOONSHOT_API_KEY 環境變數');
    process.exit(1);
  }

  const connected = await testConnection();
  if (!connected) {
    process.exit(1);
  }

  await testModels();
  await testSimpleChat();
  await testChatCompletion();
  await testDirectSDK();

  console.log('\n✨ 測試完成!');
}

runTests().catch(console.error);
