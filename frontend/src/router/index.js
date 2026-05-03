import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('@/views/Menu.vue')
  },
  {
    path: '/menu/:id',
    name: 'MenuDetail',
    component: () => import('@/views/MenuDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/order/:id',
    name: 'OrderStatus',
    component: () => import('@/views/OrderStatus.vue')
  },
  {
    path: '/ai-recommend',
    name: 'AIRecommend',
    component: () => import('@/views/AIRecommend.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router