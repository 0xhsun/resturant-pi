import * as orderService from '../services/orderService.js';
import { success, errorResponse } from '../utils/response.js';

const createOrder = async (req, res) => {
  try {
    const { customerName, phone, items, specialRequests } = req.body;
    
    console.log('📦 收到訂單請求:', JSON.stringify(req.body, null, 2));
    
    // 驗證必填欄位
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json(errorResponse('訂單項目不能為空'));
    }
    
    // 驗證每個項目
    for (const item of items) {
      const menuId = Number(item.menuId);
      const quantity = Number(item.quantity);
      if (!menuId || !quantity || quantity < 1) {
        console.log('❌ 訂單項目驗證失敗:', item);
        return res.status(400).json(errorResponse(`訂單項目資料不完整: menuId=${item.menuId}, quantity=${item.quantity}`));
      }
    }
    
    const order = await orderService.createOrder({
      customerName,
      phone,
      items,
      specialRequests
    });
    
    res.status(201).json(success(order, '訂單建立成功'));
  } catch (err) {
    console.error('建立訂單失敗:', err);
    res.status(500).json(errorResponse(err.message || '建立訂單失敗'));
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    
    if (!order) {
      return res.status(404).json(errorResponse('訂單不存在'));
    }
    
    res.json(success(order));
  } catch (err) {
    console.error('取得訂單失敗:', err);
    res.status(500).json(errorResponse('取得訂單失敗'));
  }
};

const getOrderByNumber = async (req, res) => {
  try {
    const { orderNumber } = req.params;
    const order = await orderService.getOrderByNumber(orderNumber);
    
    if (!order) {
      return res.status(404).json(errorResponse('訂單不存在'));
    }
    
    res.json(success(order));
  } catch (err) {
    console.error('取得訂單失敗:', err);
    res.status(500).json(errorResponse('取得訂單失敗'));
  }
};

const getOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderStatus(id);
    
    if (!order) {
      return res.status(404).json(errorResponse('訂單不存在'));
    }
    
    res.json(success({
      ...order,
      statusLabel: orderService.statusLabels[order.status] || order.status
    }));
  } catch (err) {
    console.error('取得訂單狀態失敗:', err);
    res.status(500).json(errorResponse('取得訂單狀態失敗'));
  }
};

export {
  createOrder,
  getOrderById,
  getOrderByNumber,
  getOrderStatus
};
