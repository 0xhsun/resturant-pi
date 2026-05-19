import { Type } from '@mariozechner/pi-ai';
import { query } from '../../../config/database.js';

export const dailyReportTool = {
  name: 'daily_report',
  label: '每日報表',
  description: '查詢指定日期的訂單統計：總銷售額、訂單數量、熱門商品',
  parameters: Type.Object({
    date: Type.Optional(Type.String({ description: '報表日期 YYYY-MM-DD，不填則為昨天' })),
  }),
  execute: async (_id, params) => {
    const date = params.date || new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    const [summary] = await query(
      `SELECT COUNT(*) as orderCount,
              COALESCE(SUM(total_amount), 0) as totalRevenue,
              COALESCE(AVG(total_amount), 0) as avgOrderValue
       FROM orders WHERE DATE(created_at) = ? AND status != 'cancelled'`,
      [date]
    );

    const topItems = await query(
      `SELECT m.name, SUM(oi.quantity) as qty, SUM(oi.subtotal) as revenue
       FROM order_items oi
       JOIN orders o ON oi.order_id = o.id
       JOIN menus m ON oi.menu_id = m.id
       WHERE DATE(o.created_at) = ? AND o.status != 'cancelled'
       GROUP BY m.id ORDER BY qty DESC LIMIT 5`,
      [date]
    );

    return {
      content: [{ type: 'text', text: JSON.stringify({ date, summary, topItems }) }],
      details: { date },
    };
  },
};
