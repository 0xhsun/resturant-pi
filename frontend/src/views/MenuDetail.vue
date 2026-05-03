<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <button 
        @click="$router.back()"
        class="flex items-center text-gray-400 hover:text-neutral transition-colors mb-6"
      >
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        返回菜單
      </button>

      <div v-if="menuStore.loading" class="card animate-pulse">
        <div class="aspect-video bg-gray-800"/>
        <div class="p-6 space-y-4">
          <div class="h-8 bg-gray-800 rounded w-1/2"/>
          <div class="h-4 bg-gray-800 rounded w-full"/>
          <div class="h-4 bg-gray-800 rounded w-3/4"/>
        </div>
      </div>

      <div v-else-if="menu" class="card overflow-hidden">
        <!-- Image -->
        <div class="aspect-video relative">
          <img 
            :src="menu.image || '/placeholder-ramen.jpg'" 
            :alt="menu.name"
            class="w-full h-full object-cover"
          >
          <div v-if="menu.isPopular" class="absolute top-4 left-4">
            <span class="bg-accent text-white text-sm font-bold px-3 py-1 rounded">
              人氣推薦
            </span>
          </div>
        </div>

        <div class="p-6 md:p-8">
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-neutral mb-2">{{ menu.name }}</h1>
              <p class="text-gray-400">{{ menu.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-3xl font-bold text-accent">${{ formatPrice(menu.price) }}</p>
              <div v-if="menu.spicyLevel > 0" class="flex justify-end mt-1">
                <span v-for="n in menu.spicyLevel" :key="n" class="text-red-500">🌶️</span>
              </div>
            </div>
          </div>

          <!-- Customizations -->
          <div v-if="customizations.length > 0" class="space-y-6 mt-8">
            <h2 class="text-xl font-bold text-neutral">客製化選項</h2>
            
            <div v-for="custom in customizations" :key="custom.id" class="bg-primary rounded-lg p-4">
              <h3 class="font-semibold text-neutral mb-3">{{ custom.name }}</h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="option in custom.options"
                  :key="option.id"
                  @click="selectedOptions[custom.id] = option.id"
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="selectedOptions[custom.id] === option.id
                    ? 'bg-accent text-white'
                    : 'bg-neutral-dark text-gray-300 hover:text-neutral'"
                >
                  {{ option.name }}
                  <span v-if="option.extraPrice > 0" class="ml-1 text-xs">
                    +${{ option.extraPrice }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Toppings -->
          <div v-if="menuStore.toppings.length > 0" class="mt-8">
            <h2 class="text-xl font-bold text-neutral mb-4">加購配料</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button
                v-for="topping in menuStore.toppings"
                :key="topping.id"
                @click="toggleTopping(topping)"
                class="flex items-center justify-between p-3 rounded-lg transition-colors text-left"
                :class="selectedToppings.find(t => t.id === topping.id)
                  ? 'bg-accent/20 border border-accent'
                  : 'bg-neutral-dark border border-transparent hover:border-gray-600'"
              >
                <div>
                  <p class="text-neutral font-medium text-sm">{{ topping.name }}</p>
                  <p class="text-accent text-xs">+${{ formatPrice(topping.price) }}</p>
                </div>
                <div 
                  class="w-5 h-5 rounded border-2 flex items-center justify-center"
                  :class="selectedToppings.find(t => t.id === topping.id)
                    ? 'bg-accent border-accent'
                    : 'border-gray-500'"
                >
                  <svg v-if="selectedToppings.find(t => t.id === topping.id)" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <!-- Quantity -->
          <div class="mt-8 pt-8 border-t border-gray-800">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <span class="text-neutral font-medium">數量</span>
                <div class="flex items-center bg-neutral-dark rounded-lg">
                  <button 
                    @click="quantity > 1 && quantity--"
                    class="w-10 h-10 flex items-center justify-center text-neutral hover:text-accent transition-colors"
                    :disabled="quantity <= 1"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                  </button>
                  <span class="w-12 text-center text-neutral font-semibold">{{ quantity }}</span>
                  <button 
                    @click="quantity++"
                    class="w-10 h-10 flex items-center justify-center text-neutral hover:text-accent transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="text-right">
                <p class="text-sm text-gray-400">小計</p>
                <p class="text-2xl font-bold text-accent">${{ formatPrice(totalPrice) }}</p>
              </div>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <button 
            @click="addToCart"
            class="w-full btn-primary text-lg mt-6 py-4"
          >
            加入購物車
          </button>
        </div>
      </div>

      <div v-else class="text-center py-20">
        <div class="text-6xl mb-4">🍜</div>
        <h3 class="text-xl text-neutral mb-2">找不到此菜品</h3>
        <RouterLink to="/menu" class="text-accent hover:underline">
          返回菜單
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const menuStore = useMenuStore()
const cartStore = useCartStore()

const quantity = ref(1)
const selectedOptions = ref({})
const selectedToppings = ref([])

const menuId = computed(() => route.params.id)
const menu = computed(() => menuStore.getMenuById(menuId.value))

// Mock customizations - would come from API
const customizations = ref([
  {
    id: 1,
    name: '湯頭濃度',
    options: [
      { id: 'light', name: '清淡', extraPrice: 0 },
      { id: 'normal', name: '正常', extraPrice: 0 },
      { id: 'rich', name: '濃厚', extraPrice: 0 }
    ]
  },
  {
    id: 2,
    name: '麵條軟硬度',
    options: [
      { id: 'soft', name: '軟', extraPrice: 0 },
      { id: 'medium', name: '普通', extraPrice: 0 },
      { id: 'firm', name: '硬', extraPrice: 0 }
    ]
  }
])

const totalPrice = computed(() => {
  const basePrice = menu.value?.price || 0
  const toppingsPrice = selectedToppings.value.reduce((sum, t) => sum + t.price, 0)
  return (basePrice + toppingsPrice) * quantity.value
})

const toggleTopping = (topping) => {
  const index = selectedToppings.value.findIndex(t => t.id === topping.id)
  if (index > -1) {
    selectedToppings.value.splice(index, 1)
  } else {
    selectedToppings.value.push(topping)
  }
}

const addToCart = () => {
  if (!menu.value) return

  cartStore.addItem(menu.value, {
    quantity: quantity.value,
    customizations: selectedOptions.value,
    toppings: selectedToppings.value
  })

  router.push('/cart')
}

const formatPrice = (price) => {
  return price?.toLocaleString('zh-TW') || '0'
}

onMounted(() => {
  if (!menu.value) {
    menuStore.fetchMenuDetail(menuId.value)
  }
  // Set defaults
  customizations.value.forEach(c => {
    if (c.options.length > 0) {
      selectedOptions.value[c.id] = c.options[0].id
    }
  })
})
</script>