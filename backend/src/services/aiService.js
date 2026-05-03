import { openai, validateApiKey } from '../config/openai.js';
import menuService from './menuService.js';

const getRecommendation = async (preferences, budget = null) => {
  if (!validateApiKey()) {
    throw new Error('AI 服務未設定');
  }
  
  // 取得所有菜單資訊
  const menus = await menuService.getAllMenus();
  const menuList = menus.map(m => ({
    id: m.id,
    name: m.name,
    nameEn: m.name_en,
    description: m.description,
    price: m.price,
    category: m.category,
    categoryName: menuService.categoryNames[m.category]
  }));
  
  // 過濾符合預算的菜單
  let availableMenus = menuList;
  if (budget) {
    availableMenus = menuList.filter(m => m.price <= budget);
  }
  
  const systemPrompt = `你是一個專業的拉麵店 AI 助手，熟悉各種拉麵的風味和特色。
請根據顧客的偏好和預算，從以下菜單中推薦最適合的拉麵：

${JSON.stringify(availableMenus, null, 2)}

請用繁體中文回覆，語氣親切專業。回覆格式：
1. 先簡短問候
2. 推薦 1-2 款最適合的拉麵，說明為什麼適合
3. 可以簡單介紹推薦拉麵的特色
4. 最後禮貌地邀請顧客點餐`;

  const userPrompt = `顧客偏好：${preferences}${budget ? `\n預算：${budget} 元` : ''}`;
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.7,
    max_tokens: 800
  });
  
  return completion.choices[0].message.content;
};

const chat = async (message, history = []) => {
  if (!validateApiKey()) {
    throw new Error('AI 服務未設定');
  }
  
  // 取得所有菜單資訊
  const menus = await menuService.getAllMenus();
  const menuList = menus.map(m => ({
    id: m.id,
    name: m.name,
    nameEn: m.name_en,
    description: m.description,
    price: m.price,
    category: m.category,
    categoryName: menuService.categoryNames[m.category]
  }));
  
  const systemPrompt = `你是一個專業的拉麵店 AI 助手，名叫「麵魂小幫手」。
你熟悉店內所有拉麵的風味、湯頭特色、麵條種類。
請用繁體中文回覆，語氣親切、熱情、專業，像是一位經驗豐富的拉麵店店員。

店內菜單資訊：
${JSON.stringify(menuList, null, 2)}

你可以：
1. 根據顧客喜好推薦拉麵
2. 介紹拉麵的特色和湯頭
3. 說明配料選項
4. 回答關於菜單的任何問題
5. 提供客製化建議

請保持簡短精要，每次回覆不超過 150 字。`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: message }
  ];
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: messages,
    temperature: 0.8,
    max_tokens: 300
  });
  
  return completion.choices[0].message.content;
};

export {
  getRecommendation,
  chat
};
