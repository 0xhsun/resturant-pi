import { Type } from '@mariozechner/pi-ai';
import { query } from '../../../config/database.js';

export const inventoryAlertTool = {
  name: 'inventory_alert',
  label: '庫存警報',
  description: '列出庫存低於閾值的菜單項目',
  parameters: Type.Object({
    threshold: Type.Optional(Type.Number({ description: '警示閾值，預設 20' })),
  }),
  execute: async (_id, params) => {
    const threshold = params.threshold ?? 20;
    const items = await query(
      'SELECT id, name, stock_count, category FROM menus WHERE is_available = TRUE AND stock_count < ? ORDER BY stock_count',
      [threshold]
    );
    return {
      content: [{ type: 'text', text: JSON.stringify({ threshold, lowStockItems: items, count: items.length }) }],
      details: { alertCount: items.length },
    };
  },
};
