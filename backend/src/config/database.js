import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ramen_shop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
};

const pool = mysql.createPool(dbConfig);

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL 資料庫連線成功');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ MySQL 資料庫連線失敗:', error.message);
    return false;
  }
};

const query = async (sql, params) => {
  const [rows] = await pool.execute(sql, params);
  return rows;
};

const transaction = async (callback) => {
  const connection = await pool.getConnection();
  await connection.beginTransaction();
  
  try {
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

export {
  pool,
  query,
  transaction,
  testConnection
};
