import { Type } from '@mariozechner/pi-ai';
import { getAllMenus, categoryNames } from '../../../services/menuService.js';
import { simpleChat } from '../../../services/llmService.js';

export const recommendTool = {
  name: 'recommend',
  label: '推薦菜單',
  description: '根據顧客偏好（口味、辣度、預算等）推薦最適合的拉麵',
  parameters: Type.Object({
    preferences: Type.String({ description: '顧客偏好，例如：不辣、預算200元、喜歡濃郁湯底' }),
    budget: Type.Optional(Type.Number({ description: '最高預算（元）' })),
  }),
  execute: async (_id, params) => {
    const menus = await getAllMenus();
    const available = params.budget
      ? menus.filter(m => m.price <= params.budget)
      : menus;

    const menuList = available.map(m => ({
      id: m.id,
      name: m.name,
      price: m.price,
      category: categoryNames[m.category] || m.category,
      description: m.description,
    }));

    const systemPrompt = `你是拉麵職人的推薦助理。根據顧客偏好從以下菜單推薦 1-2 款最適合的拉麵，簡短說明理由。菜單：${JSON.stringify(menuList)}`;
    const result = await simpleChat(params.preferences, { systemPrompt, temperature: 0.7, maxTokens: 400 });

    return {
      content: [{ type: 'text', text: typeof result === 'string' ? result : JSON.stringify(result) }],
      details: {},
    };
  },
};
