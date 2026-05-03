<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="section-title text-center mb-8">購物車</h1>

      <div v-if="cartStore.isEmpty" class="text-center py-20">
        <div class="text-6xl mb-4">🛒</div>
        <h3 class="text-xl text-neutral mb-2">購物車是空的</h3>
        <p class="text-gray-400 mb-6">快去選購美味的拉麵吧！</p>
        <RouterLink to="/menu" class="btn-primary">
          瀏覽菜單
        </RouterLink>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div 
            v-for="item in cartStore.items" 
            :key="item.id"
            class="card p-4 flex gap-4"
          >
            <img 
              :src="item.image || '/placeholder-ramen.jpg'" 
              :alt="item.name"
              class="w-24 h-24 object-cover rounded-lg"
            >
            
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-bold text-neutral">{{ item.name }}</h3>
                  <p v-if="hasCustomizations(item)" class="text-sm text-gray-400 mt-1">
                    {{ formatOptions(item) }}
                  </p>
                  <p v-if="item.toppings?.length" class="text-sm text-gray-400">
                    加購: {{ item.toppings.map(t => t.name).join(', ') }}
                  </p>
                </div>
                <button 
                  @click="cartStore.removeItem(item.id)"
                  class="text-gray-500 hover:text-accent transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>

              <div class="flex items-center justify-between mt-4">
                <div class="flex items-center bg-primary rounded-lg">
                  <button 
                    @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 flex items-center justify-center text-neutral hover:text-accent"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                  </button>
                  <span class="w-10 text-center text-neutral">{{ item.quantity }}</span>
                  <button 
                    @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 flex items-center justify-center text-neutral hover:text-accent"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
                
                <p class="font-bold text-accent">
                  ${{ formatPrice((item.price + item.toppings?.reduce((s, t) => s + t.price, 0)) * item.quantity) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="card p-6 sticky top-24">
            <h2 class="text-xl font-bold text-neutral mb-6">訂單摘要</h2>
            
            <!-- Customer Info -->
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm text-gray-400 mb-2">用餐人姓名</label>
                <input 
                  v-model="customerInfo.name"
                  type="text"
                  placeholder="請輸入姓名"
                  class="input-field"
                >
              </div>
              <div>
                <label class="block text-sm text-gray-400 mb-2">桌號</label>
                <input 
                  v-model="customerInfo.table"
                  type="text"
                  placeholder="請輸入桌號"
                  class="input-field"
                >
              </div>
              <div>
                <label class="block text-sm text-gray-400 mb-2">備註</label>
                <textarea 
                  v-model="customerInfo.notes"
                  rows="2"
                  placeholder="特殊需求..."
                  class="input-field resize-none"
                />
              </div>
            </div>

            <div class="border-t border-gray-800 pt-4 space-y-2">
              <div class="flex justify-between text-gray-400">
                <span>小計</span>
                <span>${{ formatPrice(cartStore.totalPrice) }}</span>
              </div>
              <div class="flex justify-between text-gray-400">
                <span>服務費</span>
                <span>已含</span>
              </div>
              <div class="flex justify-between text-xl font-bold text-neutral pt-2">
                <span>總計</span>
                <span class="text-accent">${{ formatPrice(cartStore.totalPrice) }}</span>
              </div>
            </div>

            <button 
              @click="submitOrder"
              :disabled="!canSubmit || orderStore.loading"
              class="w-full btn-primary mt-6"
            >
              <span v-if="orderStore.loading">處理中...</span>
              <span v-else>確認訂單</span>
            </button>

            <p v-if="orderStore.error" class="text-accent text-sm mt-4 text-center">
              {{ orderStore.error }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'

const router = useRouter()
const cartStore = useCartStore()
const orderStore = useOrderStore()

const customerInfo = ref({
  name: cartStore.customerName,
  table: cartStore.tableNumber,
  notes: cartStore.notes
})

watch(customerInfo, (newVal) => {
  cartStore.setCustomerInfo(newVal.name, newVal.table, newVal.notes)
}, { deep: true })

const canSubmit = computed(() => {
  return customerInfo.value.name.trim() && customerInfo.value.table.trim()
})

const hasCustomizations = (item) => {
  return item.customizations && Object.keys(item.customizations).length > 0
}

const formatOptions = (item) => {
  // Would format based on actual customization options
  return Object.entries(item.customizations || {})
    .map(([key, val]) => `${key}: ${val}`)
    .join(', ')
}

const formatPrice = (price) => {
  return price?.toLocaleString('zh-TW') || '0'
}

const submitOrder = async () => {
  try {
    const orderData = cartStore.getOrderData()
    const order = await orderStore.createOrder(orderData)
    cartStore.clearCart()
    router.push(`/order/${order.id}`)
  } catch (err) {
    console.error('Order failed:', err)
  }
}
</script>