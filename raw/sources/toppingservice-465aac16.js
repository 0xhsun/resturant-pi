import { query } from '../config/database.js';

const getAllToppings = async () => {
  const sql = `
    SELECT id, name, price, image_url, is_available, created_at
    FROM toppings 
    WHERE is_available = TRUE
    ORDER BY id
  `;
  return await query(sql);
};

const getToppingsByIds = async (ids) => {
  if (!ids || ids.length === 0) return [];
  
  const placeholders = ids.map(() => '?').join(',');
  const sql = `
    SELECT id, name, price, image_url
    FROM toppings 
    WHERE id IN (${placeholders}) AND is_available = TRUE
  `;
  return await query(sql, ids);
};

export {
  getAllToppings,
  getToppingsByIds
};
