import { query } from '../config/database.js';

const getAllMenus = async (category = null) => {
  let sql = `
    SELECT id, name, name_en, description, price, image_url, 
           category, is_available, stock_count, created_at, updated_at
    FROM menus 
    WHERE is_available = TRUE
  `;
  const params = [];
  
  if (category) {
    sql += ' AND category = ?';
    params.push(category);
  }
  
  sql += ' ORDER BY category, id';
  
  return await query(sql, params);
};

const getMenuById = async (id) => {
  const sql = `
    SELECT id, name, name_en, description, price, image_url, 
           category, is_available, stock_count, created_at, updated_at
    FROM menus 
    WHERE id = ? AND is_available = TRUE
  `;
  const rows = await query(sql, [id]);
  return rows[0] || null;
};

const getCategories = async () => {
  const sql = `
    SELECT DISTINCT category 
    FROM menus 
    WHERE is_available = TRUE
    ORDER BY FIELD(category, 'tonkotsu', 'shoyu', 'miso', 'tsukemen', 'side')
  `;
  const rows = await query(sql);
  return rows.map(row => row.category);
};

const categoryNames = {
  tonkotsu: '豚骨',
  shoyu: '醬油',
  miso: '味噌',
  tsukemen: '沾麵',
  side: '小菜'
};

export {
  getAllMenus,
  getMenuById,
  getCategories,
  categoryNames
};
