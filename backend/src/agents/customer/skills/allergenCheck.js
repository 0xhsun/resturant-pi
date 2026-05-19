import { Type } from '@mariozechner/pi-ai';
import { getAllMenus } from '../../../services/menuService.js';

const ALLERGEN_KEYWORDS = {
  gluten: ['麵', '小麥', 'wheat', 'gluten', '拉麵', 'noodle'],
  soy: ['大豆', '醬油', 'soy', '豆', '味噌', 'miso'],
  pork: ['豚', '豬', 'pork', '叉燒', 'chashu'],
  egg: ['蛋', 'egg', '玉子'],
  shellfish: ['蝦', '蟹', 'shrimp', 'crab', 'shellfish'],
  dairy: ['奶', '乳', 'milk', 'dairy', 'butter', 'cheese'],
};

export const allergenCheckTool = {
  name: 'allergen_check',
  label: '過敏原檢查',
  description: '根據要避開的過敏原，列出可安全食用的菜單項目',
  parameters: Type.Object({
    allergens: Type.Array(Type.String(), {
      description: '過敏原清單：gluten(麩質)、soy(大豆)、pork(豬肉)、egg(蛋)、shellfish(甲殼類)、dairy(乳製品)',
    }),
  }),
  execute: async (_id, params) => {
    const menus = await getAllMenus();
    const keywords = params.allergens.flatMap(a => ALLERGEN_KEYWORDS[a] || [a]);

    const safe = menus.filter(m => {
      const text = `${m.name} ${m.description || ''}`.toLowerCase();
      return !keywords.some(kw => text.includes(kw.toLowerCase()));
    });

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          safeItems: safe.map(m => ({ id: m.id, name: m.name, price: m.price })),
          checkedAllergens: params.allergens,
          note: '結果僅供參考，請向店員確認實際成分',
        }),
      }],
      details: { safeCount: safe.length },
    };
  },
};
