import { Router } from 'express';
import * as toppingController from '../controllers/toppingController.js';

const router = Router();

// GET /api/toppings - 取得所有配料
router.get('/', toppingController.getAllToppings);

// GET /api/toppings/customizations - 取得所有客製化選項
router.get('/customizations', toppingController.getCustomizations);

export default router;
