<template>
  <footer class="bg-neutral-dark border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">麵</span>
            </div>
            <span class="text-xl font-bold text-neutral">拉麵職人</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            專注於每一碗拉麵的細節，<br>
            用心呈現最道地的日式風味。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-neutral font-semibold mb-4">快速連結</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="text-gray-400 hover:text-neutral transition-colors">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-neutral font-semibold mb-4">聯絡我們</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>台北市中山區拉麵街 88 號</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>(02) 2345-6789</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>11:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} 拉麵職人 Ramen Master. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: '瀏覽菜單', path: '/menu' },
  { name: 'AI 推薦', path: '/ai-recommend' },
  { name: '購物車', path: '/cart' }
]
</script>