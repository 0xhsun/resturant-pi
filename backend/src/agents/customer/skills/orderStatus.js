import { Type } from '@mariozechner/pi-ai';
import { getOrderByNumber, statusLabels } from '../../../services/orderService.js';

export const orderStatusTool = {
  name: 'order_status',
  label: '查詢訂單',
  description: '依訂單編號查詢訂單狀態與詳情',
  parameters: Type.Object({
    orderNumber: Type.String({ description: '訂單編號，例如：ORD-20240519-001' }),
  }),
  execute: async (_id, params) => {
    const order = await getOrderByNumber(params.orderNumber);
    if (!order) {
      throw new Error(`找不到訂單 ${params.orderNumber}`);
    }
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          orderNumber: order.order_number,
          status: statusLabels[order.status] || order.status,
          totalAmount: order.total_amount,
          createdAt: order.created_at,
          items: (order.items || []).map(i => ({ name: i.menu_name, quantity: i.quantity })),
        }),
      }],
      details: { orderId: order.id },
    };
  },
};
