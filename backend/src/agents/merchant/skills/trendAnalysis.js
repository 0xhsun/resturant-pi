import { Type } from '@mariozechner/pi-ai';
import { query } from '../../../config/database.js';

export const trendAnalysisTool = {
  name: 'trend_analysis',
  label: '趨勢分析',
  description: '分析近 N 天的每日銷售趨勢和熱門分類',
  parameters: Type.Object({
    days: Type.Optional(Type.Number({ description: '分析天數，預設 7 天' })),
  }),
  execute: async (_id, params) => {
    const days = params.days || 7;

    const dailyTrend = await query(
      `SELECT DATE(created_at) as date, COUNT(*) as orders, SUM(total_amount) as revenue
       FROM orders
       WHERE status != 'cancelled' AND created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
       GROUP BY DATE(created_at) ORDER BY date`,
      [days]
    );

    const categoryTrend = await query(
      `SELECT m.category, SUM(oi.quantity) as qty
       FROM order_items oi
       JOIN orders o ON oi.order_id = o.id
       JOIN menus m ON oi.menu_id = m.id
       WHERE o.status != 'cancelled' AND o.created_at >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
       GROUP BY m.category ORDER BY qty DESC`,
      [days]
    );

    return {
      content: [{ type: 'text', text: JSON.stringify({ days, dailyTrend, categoryTrend }) }],
      details: { days },
    };
  },
};
