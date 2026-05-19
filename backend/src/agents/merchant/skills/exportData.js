import { Type } from '@mariozechner/pi-ai';
import { query } from '../../../config/database.js';

export const exportDataTool = {
  name: 'export_data',
  label: '匯出資料',
  description: '匯出指定日期範圍的訂單資料摘要',
  parameters: Type.Object({
    startDate: Type.String({ description: '起始日期 YYYY-MM-DD' }),
    endDate: Type.String({ description: '結束日期 YYYY-MM-DD' }),
  }),
  execute: async (_id, params) => {
    const orders = await query(
      `SELECT o.order_number, o.customer_name, o.total_amount, o.status,
              o.created_at, COUNT(oi.id) as item_count
       FROM orders o
       LEFT JOIN order_items oi ON o.id = oi.order_id
       WHERE DATE(o.created_at) BETWEEN ? AND ?
       GROUP BY o.id ORDER BY o.created_at`,
      [params.startDate, params.endDate]
    );
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({ startDate: params.startDate, endDate: params.endDate, orders, count: orders.length }),
      }],
      details: { count: orders.length },
    };
  },
};
