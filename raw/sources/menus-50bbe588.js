import { Router } from 'express';
import * as menuController from '../controllers/menuController.js';

const router = Router();

// GET /api/menus - 取得所有菜單（支援 category 篩選）
router.get('/', menuController.getAllMenus);

// GET /api/menus/categories - 取得所有分類
router.get('/categories', menuController.getCategories);

// GET /api/menus/:id - 取得單一菜色詳情
router.get('/:id', menuController.getMenuById);

export default router;
