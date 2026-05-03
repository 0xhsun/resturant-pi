/**
 * Ramen Shop Backend - Express.js API Server
 * 使用 Moonshot Kimi LLM Provider
 */

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import llmRoutes from './routes/llm.js';
import aiRoutes from './routes/ai.js';
import menuRoutes from './routes/menus.js';
import toppingRoutes from './routes/toppings.js';
import orderRoutes from './routes/orders.js';
import { testConnection } from './config/database.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 中間件
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 健康檢查
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'ramen-shop-backend',
    llmProvider: 'moonshot-kimi',
    timestamp: new Date().toISOString(),
  });
});

// API 路由
app.use('/api/llm', llmRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/toppings', toppingRoutes);
app.use('/api/orders', orderRoutes);

// 404 處理
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'API 端點不存在',
  });
});

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error('服務器錯誤:', err);
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'development' ? err.message : '內部服務器錯誤',
  });
});

// 啟動服務器
const startServer = async () => {
  // 測試資料庫連線
  const dbConnected = await testConnection();
  if (!dbConnected) {
    console.error('❌ 資料庫連線失敗，請檢查 Docker MySQL 是否運行');
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`🚀 後端服務器運行在 http://localhost:${PORT}`);
    console.log(`🤖 LLM Provider: Moonshot Kimi`);
    console.log(`📚 API 文檔: https://platform.moonshot.ai/docs/api-reference`);
  });
};

startServer();

export default app;
