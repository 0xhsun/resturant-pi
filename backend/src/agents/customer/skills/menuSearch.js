import { Type } from '@mariozechner/pi-ai';
import { getAllMenus, categoryNames } from '../../../services/menuService.js';

export const menuSearchTool = {
  name: 'menu_search',
  label: '搜尋菜單',
  description: '搜尋拉麵菜單，可依分類或關鍵字篩選。分類：tonkotsu(豚骨)、shoyu(醬油)、miso(味噌)、tsukemen(沾麵)、side(小菜)',
  parameters: Type.Object({
    category: Type.Optional(Type.String({ description: '菜單分類' })),
    keyword: Type.Optional(Type.String({ description: '搜尋關鍵字（名稱或描述）' })),
  }),
  execute: async (_id, params) => {
    const menus = await getAllMenus(params.category || null);
    const filtered = params.keyword
      ? menus.filter(m =>
          m.name.includes(params.keyword) ||
          (m.name_en || '').toLowerCase().includes(params.keyword.toLowerCase()) ||
          (m.description || '').includes(params.keyword)
        )
      : menus;

    const result = filtered.map(m => ({
      id: m.id,
      name: m.name,
      nameEn: m.name_en,
      category: categoryNames[m.category] || m.category,
      price: m.price,
      description: m.description,
      isPopular: m.isPopular,
      stockCount: m.stock_count,
    }));

    return {
      content: [{ type: 'text', text: JSON.stringify(result) }],
      details: { count: result.length },
    };
  },
};
