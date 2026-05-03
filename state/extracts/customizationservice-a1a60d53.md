import { query } from '../config/database.js';

const getAllCustomizations = async () => {
  const sql = `
    SELECT id, category, name, display_order
    FROM customization_options
    ORDER BY category, display_order
  `;
  const rows = await query(sql);
  
  // 按 category 分組
  const grouped = {};
  rows.forEach(row => {
    if (!grouped[row.category]) {
      grouped[row.category] = [];
    }
    grouped[row.category].push({
      id: row.id,
      name: row.name,
      displayOrder: row.display_order
    });
  });
  
  return grouped;
};

const categoryLabels = {
  soup: '湯頭濃度',
  noodle: '麵條硬度',
  onion: '蔥量',
  garlic: '蒜泥',
  spiciness: '辣度'
};

export {
  getAllCustomizations,
  categoryLabels
};
