import { query } from '../config/database.js';

/**
 * 生成訂單編號
 * 格式：R + 年月日 + 4位流水號 (e.g., R202405020001)
 */
const generateOrderNumber = async () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const datePrefix = `R${year}${month}${day}`;
  
  // 查詢今日最後一筆訂單編號
  const sql = `
    SELECT order_number 
    FROM orders 
    WHERE order_number LIKE ? 
    ORDER BY order_number DESC 
    LIMIT 1
  `;
  
  const rows = await query(sql, [`${datePrefix}%`]);
  
  let sequence = 1;
  if (rows.length > 0) {
    const lastNumber = rows[0].order_number;
    const lastSequence = parseInt(lastNumber.slice(-4), 10);
    sequence = lastSequence + 1;
  }
  
  const sequenceStr = String(sequence).padStart(4, '0');
  return `${datePrefix}${sequenceStr}`;
};

export {
  generateOrderNumber
};
