<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="section-title text-center mb-8">訂單狀態</h1>

      <div v-if="orderStore.loading" class="card p-8 text-center">
        <div class="animate-spin w-12 h-12 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"/>
        <p class="text-gray-400">查詢訂單中...</p>
      </div>

      <div v-else-if="order" class="space-y-6">
        <!-- Order Info -->
        <div class="card p-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-gray-400 text-sm">訂單編號</p>
              <p class="text-xl font-bold text-neutral">#{{ order.id }}</p>
            </div>
            <div class="text-right">
              <p class="text-gray-400 text-sm">總金額</p>
              <p class="text-2xl font-bold text-accent">${{ formatPrice(order.total_amount) }}</p>
            </div>
          </div>
          
          <div class="flex items-center justify-between text-sm">
            <div>
              <p class="text-gray-400">顧客</p>
              <p class="text-neutral">{{ order.customer_name }}</p>
            </div>
            <div class="text-right">
              <p class="text-gray-400">桌號</p>
              <p class="text-neutral">{{ order.table_number }}</p>
            </div>
          </div>
        </div>

        <!-- Status Timeline -->
        <div class="card p-6">
          <h2 class="text-lg font-bold text-neutral mb-6">製作進度</h2>
          
          <div class="space-y-6">
            <div 
              v-for="(step, index) in statusSteps" 
              :key="step.status}
              class="flex items-start gap-4"
            >
              <div class="flex flex-col items-center">
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center"
                  :class="getStepClass(step.status)"
                >
                  <span class="text-lg">{{ step.icon }}</span>
                </div>
                <div 
                  v-if="index < statusSteps.length - 1"
                  class="w-0.5 h-12 mt-2"
                  :class="isStepCompleted(step.status) ? 'bg-accent' : 'bg-gray-700'"
                />
              </div>
              
              <div class="flex-1 pt-2">
                <h3 
                  class="font-semibold"
                  :class="isStepActive(step.status) ? 'text-neutral' : 'text-gray-500'"
                >
                  {{ step.label }}
                </h3>
                <p class="text-sm text-gray-400">{{ step.description }}</p>
                <p v-if="getStepTime(step.status)" class="text-xs text-gray-500 mt-1">
                  {{ getStepTime(step.status) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Items -->
        <div class="card p-6">
          <h2 class="text-lg font-bold text-neutral mb-4">訂單內容</h2>
          <div class="space-y-3">
            <div 
              v-for="item in order.items" 
              :key="item.id"
              class="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
            >
              <div class="flex items-center gap-3">
                <span class="text-neutral font-medium">{{ item.menu?.name || '拉麵' }}</span>
                <span class="text-gray-500 text-sm">x{{ item.quantity }}</span>
              </div>
              <span class="text-accent">${{ formatPrice(item.price * item.quantity) }}</span>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4">
          <button 
            @click="refreshStatus"
            class="flex-1 btn-outline"
            :disabled="isRefreshing"
          >
            <span v-if="isRefreshing">更新中...</span>
            <span v-else>重新整理</span>
          </button>
          <RouterLink to="/menu" class="flex-1 btn-primary text-center">
            繼續點餐
          </RouterLink>
        </div>
      </div>

      <div v-else class="card p-8 text-center">
        <div class="text-6xl mb-4">📋</div>
        <h3 class="text-xl text-neutral mb-2">找不到訂單</h3>
        <p class="text-gray-400 mb-6">請確認訂單編號是否正確</p>
        <RouterLink to="/menu" class="btn-primary">
          前往點餐
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useOrderStore } from '@/stores/order'

const route = useRoute()
const orderStore = useOrderStore()

const isRefreshing = ref(false)
let refreshInterval = null

const orderId = computed(() => route.params.id)
const order = computed(() => orderStore.currentOrder)

const statusSteps = [
  { 
    status: 'pending', 
    label: '訂單已接收', 
    description: '廚房已收到您的訂單',
    icon: '📝'
  },
  { 
    status: 'preparing', 
    label: '製作中', 
    description: '師傅正在精心製作',
    icon: '👨‍🍳'
  },
  { 
    status: 'ready', 
    label: '準備完成', 
    description: '拉麵即將上桌',
    icon: '🍜'
  },
  { 
    status: 'served', 
    label: '已上桌', 
    description: '請享用美味拉麵',
    icon: '✅'
  }
]

const currentStatus = computed(() => {
  return orderStore.orderStatus?.status || order.value?.status || 'pending'
})

const getStepClass = (status) => {
  if (isStepActive(status)) {
    return 'bg-accent text-white animate-pulse'
  }
  if (isStepCompleted(status)) {
    return 'bg-accent/20 text-accent'
  }
  return 'bg-gray-800 text-gray-500'
}

const isStepActive = (status) => {
  return currentStatus.value === status
}

const isStepCompleted = (status) => {
  const statusOrder = ['pending', 'preparing', 'ready', 'served']
  const currentIndex = statusOrder.indexOf(currentStatus.value)
  const stepIndex = statusOrder.indexOf(status)
  return stepIndex < currentIndex
}

const getStepTime = (status) => {
  // Would return actual timestamp from order data
  return null
}

const formatPrice = (price) => {
  return price?.toLocaleString('zh-TW') || '0'
}

const refreshStatus = async () => {
  isRefreshing.value = true
  try {
    await orderStore.fetchOrderStatus(orderId.value)
  } finally {
    isRefreshing.value = false
  }
}

onMounted(() => {
  orderStore.fetchOrder(orderId.value)
  
  // Auto refresh every 10 seconds
  refreshInterval = setInterval(() => {
    orderStore.fetchOrderStatus(orderId.value)
  }, 10000)
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>