import { query, transaction } from '../config/database.js';
import { generateOrderNumber } from '../utils/orderNumber.js';
import * as menuService from './menuService.js';
import * as toppingService from './toppingService.js';

const createOrder = async (orderData) => {
  const { customerName, phone, items, specialRequests } = orderData;
  
  return await transaction(async (connection) => {
    // 生成訂單編號
    const orderNumber = await generateOrderNumber();
    
    // 計算總金額並驗證商品
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of items) {
      const menuId = Number(item.menuId);
      console.log('🔍 查詢商品:', menuId, typeof menuId);
      const menu = await menuService.getMenuById(menuId);
      if (!menu) {
        throw new Error(`商品不存在: ${item.menuId}`);
      }
      
      let subtotal = menu.price * item.quantity;
      
      // 處理配料
      let toppings = [];
      if (item.toppings && item.toppings.length > 0) {
        const toppingDetails = await toppingService.getToppingsByIds(item.toppings);
        toppings = toppingDetails.map(t => ({
          id: t.id,
          name: t.name,
          price: t.price
        }));
        const toppingsTotal = toppingDetails.reduce((sum, t) => sum + t.price, 0);
        subtotal += toppingsTotal * item.quantity;
      }
      
      orderItems.push({
        menuId: menuId,
        quantity: item.quantity,
        unitPrice: menu.price,
        customizations: item.customizations || {},
        toppings: toppings,
        subtotal
      });
      
      totalAmount += subtotal;
    }
    
    // 建立訂單
    const orderSql = `
      INSERT INTO orders (order_number, customer_name, phone, total_amount, status, special_requests)
      VALUES (?, ?, ?, ?, 'pending', ?)
    `;
    const [orderResult] = await connection.execute(orderSql, [
      orderNumber,
      customerName || null,
      phone || null,
      totalAmount,
      specialRequests || null
    ]);
    
    const orderId = orderResult.insertId;
    
    // 建立訂單項目
    const itemSql = `
      INSERT INTO order_items (order_id, menu_id, quantity, unit_price, customizations, toppings, subtotal)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    for (const item of orderItems) {
      await connection.execute(itemSql, [
        orderId,
        item.menuId,
        item.quantity,
        item.unitPrice,
        JSON.stringify(item.customizations),
        JSON.stringify(item.toppings),
        item.subtotal
      ]);
    }
    
    return {
      orderId,
      orderNumber,
      totalAmount,
      status: 'pending'
    };
  });
};

const getOrderById = async (id) => {
  const orderSql = `
    SELECT id, order_number, customer_name, phone, total_amount, status, special_requests, created_at, updated_at
    FROM orders 
    WHERE id = ?
  `;
  const orders = await query(orderSql, [id]);
  
  if (orders.length === 0) return null;
  
  const order = orders[0];
  
  const itemsSql = `
    SELECT oi.id, oi.menu_id, m.name as menu_name, m.name_en as menu_name_en,
           oi.quantity, oi.unit_price, oi.customizations, oi.toppings, oi.subtotal
    FROM order_items oi
    JOIN menus m ON oi.menu_id = m.id
    WHERE oi.order_id = ?
  `;
  const items = await query(itemsSql, [id]);
  
  return {
    ...order,
    items: items.map(item => ({
      ...item,
      customizations: JSON.parse(item.customizations || '{}'),
      toppings: JSON.parse(item.toppings || '[]')
    }))
  };
};

const getOrderByNumber = async (orderNumber) => {
  const orderSql = `
    SELECT id, order_number, customer_name, phone, total_amount, status, special_requests, created_at, updated_at
    FROM orders 
    WHERE order_number = ?
  `;
  const orders = await query(orderSql, [orderNumber]);
  
  if (orders.length === 0) return null;
  
  const order = orders[0];
  
  const itemsSql = `
    SELECT oi.id, oi.menu_id, m.name as menu_name, m.name_en as menu_name_en,
           oi.quantity, oi.unit_price, oi.customizations, oi.toppings, oi.subtotal
    FROM order_items oi
    JOIN menus m ON oi.menu_id = m.id
    WHERE oi.order_id = ?
  `;
  const items = await query(itemsSql, [order.id]);
  
  return {
    ...order,
    items: items.map(item => ({
      ...item,
      customizations: JSON.parse(item.customizations || '{}'),
      toppings: JSON.parse(item.toppings || '[]')
    }))
  };
};

const getOrderStatus = async (id) => {
  const sql = `
    SELECT id, order_number, status, created_at, updated_at
    FROM orders 
    WHERE id = ?
  `;
  const rows = await query(sql, [id]);
  return rows[0] || null;
};

const statusLabels = {
  pending: '待處理',
  preparing: '製作中',
  ready: '可取餐',
  completed: '已完成',
  cancelled: '已取消'
};

export {
  createOrder,
  getOrderById,
  getOrderByNumber,
  getOrderStatus,
  statusLabels
};
