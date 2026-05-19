import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { pool } from '../src/config/database.js';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || ''
};

const dbName = process.env.DB_NAME || 'ramen_shop';

const createDatabase = async () => {
  const connection = await mysql.createConnection(dbConfig);
  
  try {
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${dbName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    console.log(`✅ 資料庫 ${dbName} 建立成功`);
  } catch (err) {
    console.error('❌ 建立資料庫失敗:', err);
    throw err;
  } finally {
    await connection.end();
  }
};

const createTables = async () => {
  const tables = [
    // menus 表格
    `
    CREATE TABLE IF NOT EXISTS menus (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      name_en VARCHAR(100),
      description TEXT,
      price DECIMAL(10,2) NOT NULL,
      image_url VARCHAR(500),
      category ENUM('tonkotsu', 'shoyu', 'miso', 'tsukemen', 'side') NOT NULL,
      is_available BOOLEAN DEFAULT TRUE,
      stock_count INT DEFAULT 100,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
    `,
    
    // toppings 表格
    `
    CREATE TABLE IF NOT EXISTS toppings (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      image_url VARCHAR(500),
      is_available BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `,
    
    // customization_options 表格
    `
    CREATE TABLE IF NOT EXISTS customization_options (
      id INT PRIMARY KEY AUTO_INCREMENT,
      category VARCHAR(50) NOT NULL,
      name VARCHAR(100) NOT NULL,
      display_order INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `,
    
    // orders 表格
    `
    CREATE TABLE IF NOT EXISTS orders (
      id INT PRIMARY KEY AUTO_INCREMENT,
      order_number VARCHAR(20) UNIQUE NOT NULL,
      customer_name VARCHAR(100),
      phone VARCHAR(20),
      total_amount DECIMAL(10,2) NOT NULL,
      status ENUM('pending', 'preparing', 'ready', 'completed', 'cancelled') DEFAULT 'pending',
      special_requests TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
    `,
    
    // order_items 表格
    `
    CREATE TABLE IF NOT EXISTS order_items (
      id INT PRIMARY KEY AUTO_INCREMENT,
      order_id INT NOT NULL,
      menu_id INT NOT NULL,
      quantity INT NOT NULL DEFAULT 1,
      unit_price DECIMAL(10,2) NOT NULL,
      customizations JSON,
      toppings JSON,
      subtotal DECIMAL(10,2) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY (menu_id) REFERENCES menus(id)
    )
    `,

    // agent_sessions 表格（CustomerAgent 持久化 session）
    `
    CREATE TABLE IF NOT EXISTS agent_sessions (
      session_id VARCHAR(64) PRIMARY KEY,
      role ENUM('customer', 'merchant') NOT NULL,
      messages JSON NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
    `,

    // merchant_reports 表格（MerchantAgent cron 報表）
    `
    CREATE TABLE IF NOT EXISTS merchant_reports (
      id INT PRIMARY KEY AUTO_INCREMENT,
      report_date DATE NOT NULL,
      type ENUM('daily_report', 'trend_analysis', 'inventory_alert') NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `
  ];
  
  for (const tableSql of tables) {
    try {
      await pool.execute(tableSql);
      const tableName = tableSql.match(/CREATE TABLE IF NOT EXISTS (\w+)/)[1];
      console.log(`✅ 表格 ${tableName} 建立成功`);
    } catch (err) {
      console.error('❌ 建立表格失敗:', err);
      throw err;
    }
  }
};

const init = async () => {
  try {
    console.log('🚀 開始初始化資料庫...');
    await createDatabase();
    await createTables();
    console.log('✨ 資料庫初始化完成！');
    process.exit(0);
  } catch (err) {
    console.error('❌ 初始化失敗:', err);
    process.exit(1);
  }
};

init();
