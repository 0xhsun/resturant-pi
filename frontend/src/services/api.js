import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000
})

// 菜單 API
export const menuApi = {
  getAll: () => api.get('/menus'),
  getById: (id) => api.get(`/menus/${id}`),
  getCategories: () => api.get('/menus/categories')
}

// 配料 API
export const toppingApi = {
  getAll: () => api.get('/toppings')
}

// 客製化選項 API
export const customizationApi = {
  getAll: () => api.get('/toppings/customizations')
}

// 訂單 API
export const orderApi = {
  create: (orderData) => api.post('/orders', orderData),
  getById: (id) => api.get(`/orders/${id}`),
  getStatus: (id) => api.get(`/orders/${id}/status`)
}

// AI 推薦 API
export const aiApi = {
  recommend: (preferences) => api.post('/ai/recommend', preferences)
}

export default api