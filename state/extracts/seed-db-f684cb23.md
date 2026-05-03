import { query } from '../src/config/database.js';

const seedMenus = async () => {
  const menus = [
    // 豚骨系列
    {
      name: '濃厚豚骨拉麵',
      name_en: 'Rich Tonkotsu Ramen',
      description: '使用豬大骨慢熬 12 小時的濃郁湯頭，搭配厚切叉燒與溏心蛋，是店內招牌人氣商品。',
      price: 280,
      image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
      category: 'tonkotsu'
    },
    {
      name: '黑蒜豚骨拉麵',
      name_en: 'Black Garlic Tonkotsu',
      description: '在濃厚豚骨湯底加入特製黑蒜油，增添層次豐富的蒜香風味。',
      price: 300,
      image_url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
      category: 'tonkotsu'
    },
    {
      name: '辛口豚骨拉麵',
      name_en: 'Spicy Tonkotsu Ramen',
      description: '濃厚豚骨湯底搭配特製辣醬，喜歡辛辣口感的您絕對不能錯過。',
      price: 290,
      image_url: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=800',
      category: 'tonkotsu'
    },
    
    // 醬油系列
    {
      name: '特製醬油拉麵',
      name_en: 'Special Shoyu Ramen',
      description: '以雞骨與多種魚介熬製的清爽湯底，搭配特製醬油醬汁，回味無窮。',
      price: 250,
      image_url: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800',
      category: 'shoyu'
    },
    {
      name: '雞白湯醬油拉麵',
      name_en: 'Chicken Shoyu Ramen',
      description: '使用土雞長時間熬製的雞白湯，口感濃郁卻不油膩。',
      price: 260,
      image_url: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800',
      category: 'shoyu'
    },
    
    // 味噌系列
    {
      name: '北海道味噌拉麵',
      name_en: 'Hokkaido Miso Ramen',
      description: '使用北海道產味噌，加入炒過的蔬菜與豚肉，是寒冬中的最佳選擇。',
      price: 270,
      image_url: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800',
      category: 'miso'
    },
    {
      name: '辛味噌拉麵',
      name_en: 'Spicy Miso Ramen',
      description: '味噌湯底加入豆瓣醬與辣椒油，香氣撲鼻、辣勁十足。',
      price: 280,
      image_url: 'https://images.unsplash.com/photo-1623341214143-b14c5f2bb4b7?w=800',
      category: 'miso'
    },
    
    // 沾麵系列
    {
      name: '特製濃厚沾麵',
      name_en: 'Rich Tsukemen',
      description: '超濃郁魚介豚骨沾醬，搭配粗版捲麵，麵條更能吸附湯汁。',
      price: 300,
      image_url: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?w=800',
      category: 'tsukemen'
    },
    {
      name: '辛口沾麵',
      name_en: 'Spicy Tsukemen',
      description: '在濃厚沾醬中加入辣油，喜歡刺激口感的您必試。',
      price: 310,
      image_url: 'https://images.unsplash.com/photo-1623341214143-b14c5f2bb4b7?w=800',
      category: 'tsukemen'
    },
    
    // 小菜系列
    {
      name: '日式煎餃子',
      name_en: 'Gyoza',
      description: '外皮酥脆、內餡多汁的手工煎餃，一份 6 顆。',
      price: 120,
      image_url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800',
      category: 'side'
    },
    {
      name: '唐揚炸雞',
      name_en: 'Karaage Chicken',
      description: '使用日式醬汁醃製的無骨雞腿肉，外酥內嫩。',
      price: 150,
      image_url: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800',
      category: 'side'
    },
    {
      name: '毛豆',
      name_en: 'Edamame',
      description: '日本進口毛豆，簡單鹽味調理，啤酒最佳搭檔。',
      price: 80,
      image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
      category: 'side'
    }
  ];
  
  for (const menu of menus) {
    const sql = `
      INSERT INTO menus (name, name_en, description, price, image_url, category)
      VALUES (?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      name_en = VALUES(name_en),
      description = VALUES(description),
      price = VALUES(price),
      image_url = VALUES(image_url)
    `;
    await query(sql, [menu.name, menu.name_en, menu.description, menu.price, menu.image_url, menu.category]);
  }
  
  console.log(`✅ 已建立 ${menus.length} 筆菜單資料`);
};

const seedToppings = async () => {
  const toppings = [
    { name: '叉燒肉 (2片)', price: 50 },
    { name: '溏心蛋', price: 30 },
    { name: '筍乾', price: 20 },
    { name: '海苔 (3片)', price: 20 },
    { name: '玉米', price: 20 },
    { name: '木耳絲', price: 20 },
    { name: '加麵', price: 40 },
    { name: '特製辣醬', price: 20 }
  ];
  
  for (const topping of toppings) {
    const sql = `
      INSERT INTO toppings (name, price)
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE price = VALUES(price)
    `;
    await query(sql, [topping.name, topping.price]);
  }
  
  console.log(`✅ 已建立 ${toppings.length} 筆配料資料`);
};

const seedCustomizations = async () => {
  const options = [
    // 湯頭濃度
    { category: 'soup', name: '清淡', display_order: 1 },
    { category: 'soup', name: '標準', display_order: 2 },
    { category: 'soup', name: '濃郁', display_order: 3 },
    { category: 'soup', name: '特濃', display_order: 4 },
    
    // 麵條硬度
    { category: 'noodle', name: '極軟', display_order: 1 },
    { category: 'noodle', name: '軟', display_order: 2 },
    { category: 'noodle', name: '標準', display_order: 3 },
    { category: 'noodle', name: '硬', display_order: 4 },
    { category: 'noodle', name: '極硬', display_order: 5 },
    
    // 蔥量
    { category: 'onion', name: '無', display_order: 1 },
    { category: 'onion', name: '少', display_order: 2 },
    { category: 'onion', name: '標準', display_order: 3 },
    { category: 'onion', name: '多', display_order: 4 },
    
    // 蒜泥
    { category: 'garlic', name: '無', display_order: 1 },
    { category: 'garlic', name: '少', display_order: 2 },
    { category: 'garlic', name: '標準', display_order: 3 },
    { category: 'garlic', name: '多', display_order: 4 },
    
    // 辣度
    { category: 'spiciness', name: '不辣', display_order: 1 },
    { category: 'spiciness', name: '微辣', display_order: 2 },
    { category: 'spiciness', name: '小辣', display_order: 3 },
    { category: 'spiciness', name: '中辣', display_order: 4 },
    { category: 'spiciness', name: '大辣', display_order: 5 }
  ];
  
  for (const option of options) {
    const sql = `
      INSERT INTO customization_options (category, name, display_order)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE display_order = VALUES(display_order)
    `;
    await query(sql, [option.category, option.name, option.display_order]);
  }
  
  console.log(`✅ 已建立 ${options.length} 筆客製化選項`);
};

const seed = async () => {
  try {
    console.log('🚀 開始建立種子資料...');
    await seedMenus();
    await seedToppings();
    await seedCustomizations();
    console.log('✨ 種子資料建立完成！');
    process.exit(0);
  } catch (err) {
    console.error('❌ 建立種子資料失敗:', err);
    process.exit(1);
  }
};

seed();
