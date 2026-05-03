<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="section-title">菜單</h1>
        <p class="section-subtitle">探索我們精心準備的各式拉麵</p>
      </div>

      <!-- Category Tabs -->
      <div class="mb-8">
        <CategoryTabs 
          :categories="menuStore.categories"
          :selected-category="selectedCategory"
          @select="selectedCategory = $event"
        />
      </div>

      <!-- Menu Grid -->
      <div v-if="menuStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="n in 8" :key="n" class="card animate-pulse">
          <div class="aspect-[4/3] bg-gray-800"/>
          <div class="p-4 space-y-3">
            <div class="h-6 bg-gray-800 rounded w-3/4"/>
            <div class="h-4 bg-gray-800 rounded w-full"/>
            <div class="h-10 bg-gray-800 rounded w-full mt-4"/>
          </div>
        </div>
      </div>

      <div v-else-if="filteredMenus.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🍜</div>
        <h3 class="text-xl text-neutral mb-2">暫無此分類的菜品</h3>
        <p class="text-gray-400">請選擇其他分類</p>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <MenuCard 
          v-for="menu in filteredMenus" 
          :key="menu.id"
          :menu="menu"
          @click="$router.push(`/menu/${menu.id}`)"
          @add-to-cart="handleAddToCart(menu)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import MenuCard from '@/components/MenuCard.vue'
import CategoryTabs from '@/components/CategoryTabs.vue'

const router = useRouter()
const menuStore = useMenuStore()
const cartStore = useCartStore()

const selectedCategory = ref(null)

const filteredMenus = computed(() => {
  if (!selectedCategory.value) {
    return menuStore.menus
  }
  return menuStore.menus.filter(menu => menu.category_id === selectedCategory.value)
})

const handleAddToCart = (menu) => {
  // For simple items without customizations, add directly
  // For items with customizations, go to detail page
  if (menu.hasCustomizations) {
    router.push(`/menu/${menu.id}`)
  } else {
    cartStore.addItem(menu, { quantity: 1 })
    router.push('/cart')
  }
}
</script>