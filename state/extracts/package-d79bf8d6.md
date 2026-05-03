{
  "name": "ramen-shop-backend",
  "version": "1.0.0",
  "description": "拉麵店點餐系統後端 - Express.js + MySQL",
  "type": "module",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "init-db": "node scripts/init-db.js",
    "seed-db": "node scripts/seed-db.js",
    "setup-db": "npm run init-db && npm run seed-db"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "helmet": "^7.1.0",
    "morgan": "^1.10.0",
    "mysql2": "^3.6.5",
    "openai": "^6.35.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  },
  "keywords": [
    "ramen",
    "restaurant",
    "express",
    "mysql"
  ],
  "author": "",
  "license": "MIT"
}
