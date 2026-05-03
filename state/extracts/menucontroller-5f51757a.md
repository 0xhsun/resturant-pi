import * as menuService from '../services/menuService.js';
import { success, errorResponse } from '../utils/response.js';

const getAllMenus = async (req, res) => {
  try {
    const { category } = req.query;
    const menus = await menuService.getAllMenus(category);
    
    // 添加分類中文名稱
    const menusWithCategoryName = menus.map(menu => ({
      ...menu,
      categoryName: menuService.categoryNames[menu.category] || menu.category
    }));
    
    res.json(success(menusWithCategoryName));
  } catch (err) {
    console.error('取得菜單失敗:', err);
    res.status(500).json(errorResponse('取得菜單失敗'));
  }
};

const getMenuById = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await menuService.getMenuById(id);
    
    if (!menu) {
      return res.status(404).json(errorResponse('商品不存在'));
    }
    
    res.json(success({
      ...menu,
      categoryName: menuService.categoryNames[menu.category] || menu.category
    }));
  } catch (err) {
    console.error('取得商品詳情失敗:', err);
    res.status(500).json(errorResponse('取得商品詳情失敗'));
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await menuService.getCategories();
    const categoriesWithName = categories.map(cat => ({
      value: cat,
      label: menuService.categoryNames[cat] || cat
    }));
    
    res.json(success(categoriesWithName));
  } catch (err) {
    console.error('取得分類失敗:', err);
    res.status(500).json(errorResponse('取得分類失敗'));
  }
};

export {
  getAllMenus,
  getMenuById,
  getCategories
};
