import * as toppingService from '../services/toppingService.js';
import * as customizationService from '../services/customizationService.js';
import { success, errorResponse } from '../utils/response.js';

const getAllToppings = async (req, res) => {
  try {
    const toppings = await toppingService.getAllToppings();
    res.json(success(toppings));
  } catch (err) {
    console.error('取得配料失敗:', err);
    res.status(500).json(errorResponse('取得配料失敗'));
  }
};

const getCustomizations = async (req, res) => {
  try {
    const customizations = await customizationService.getAllCustomizations();
    
    // 添加中文標籤
    const customizationsWithLabels = {};
    for (const [category, options] of Object.entries(customizations)) {
      customizationsWithLabels[category] = {
        label: customizationService.categoryLabels[category] || category,
        options
      };
    }
    
    res.json(success(customizationsWithLabels));
  } catch (err) {
    console.error('取得客製化選項失敗:', err);
    res.status(500).json(errorResponse('取得客製化選項失敗'));
  }
};

export {
  getAllToppings,
  getCustomizations
};
