import { Router } from 'express';
import * as orderController from '../controllers/orderController.js';

const router = Router();

// POST /api/orders - 建立訂單
router.post('/', orderController.createOrder);

// GET /api/orders/:id - 查詢訂單詳情
router.get('/:id', orderController.getOrderById);

// GET /api/orders/:id/status - 查詢訂單狀態
router.get('/:id/status', orderController.getOrderStatus);

// GET /api/orders/number/:orderNumber - 透過訂單編號查詢
router.get('/number/:orderNumber', orderController.getOrderByNumber);

export default router;
