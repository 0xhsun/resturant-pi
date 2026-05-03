<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary"/>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=1920')] bg-cover bg-center"/>
      </div>
      
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-neutral mb-6 animate-fade-in">
          拉麵職人
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-4 animate-slide-up">
          每一碗，都是職人的堅持
        </p>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.1s">
          嚴選食材、每日現熬湯頭、手工製麵，<br class="hidden md:block">
          只為呈現最道地的日式拉麵風味。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.2s">
          <RouterLink to="/menu" class="btn-primary text-lg">
            瀏覽菜單
          </RouterLink>
          <RouterLink to="/ai-recommend" class="btn-outline text-lg">
            AI 智能推薦
          </RouterLink>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="section-title">為什麼選擇我們</h2>
          <p class="section-subtitle">堅持品質，用心呈現每一碗拉麵</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="text-center p-8 bg-neutral-dark rounded-2xl hover:bg-opacity-80 transition-colors"
          >
            <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-3xl">{{ feature.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-neutral mb-3">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Menu Section -->
    <section class="py-20 px-4 bg-neutral-dark/50">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="section-title mb-2">人氣推薦</h2>
            <p class="section-subtitle mb-0">顧客最愛的經典口味</p>
          </div>
          <RouterLink to="/menu" class="hidden sm:flex items-center text-accent hover:text-red-400 transition-colors">
            查看全部
            <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </RouterLink>
        </div>

        <div v-if="menuStore.loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="n in 3" :key="n" class="card animate-pulse">
            <div class="aspect-[4/3] bg-gray-800"/>
            <div class="p-4 space-y-3">
              <div class="h-6 bg-gray-800 rounded w-3/4"/>
              <div class="h-4 bg-gray-800 rounded w-full"/>
              <div class="h-4 bg-gray-800 rounded w-1/2"/>
            </div>
          </div>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MenuCard 
            v-for="menu in popularMenus.slice(0, 6)" 
            :key="menu.id"
            :menu="menu"
            @click="$router.push(`/menu/${menu.id}`)"
            @add-to-cart="handleAddToCart(menu)"
          />
        </div>

        <div class="mt-8 text-center sm:hidden">
          <RouterLink to="/menu" class="btn-outline">
            查看全部菜單
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="section-title">準備好品嚐了嗎？</h2>
        <p class="section-subtitle">立即瀏覽菜單，選擇你喜愛的拉麵</p>
        <RouterLink to="/menu" class="btn-primary text-lg inline-block">
          開始點餐
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'
import MenuCard from '@/components/MenuCard.vue'

const router = useRouter()
const menuStore = useMenuStore()
const cartStore = useCartStore()

const popularMenus = computed(() => {
  return menuStore.menus.filter(menu => menu.isPopular)
})

const features = [
  {
    icon: '🍜',
    title: '每日現熬湯頭',
    description: '以豬大骨、雞骨架慢火熬煮 12 小時，湯頭濃郁醇厚'
  },
  {
    icon: '🌾',
    title: '手工製麵',
    description: '選用日本進口小麥粉，每日現場製作，口感 Q 彈有勁'
  },
  {
    icon: '⭐',
    title: '客製化口味',
    description: '湯頭濃淡、麵條軟硬、配料自由搭配，打造專屬拉麵'
  }
]

const handleAddToCart = (menu) => {
  cartStore.addItem(menu, { quantity: 1 })
  router.push('/cart')
}
</script>