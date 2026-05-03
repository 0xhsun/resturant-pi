<template>
  <header class="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span class="text-white text-xl font-bold">麵</span>
          </div>
          <span class="text-xl font-bold text-neutral hidden sm:block">拉麵職人</span>
        </RouterLink>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-gray-300 hover:text-neutral transition-colors duration-200 font-medium"
            :class="{ 'text-accent': $route.path === link.path }"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-neutral-dark transition-colors"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div v-show="isMenuOpen" class="md:hidden bg-neutral-dark border-t border-gray-800">
      <nav class="px-4 py-3 space-y-2">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          @click="isMenuOpen = false"
          class="block px-3 py-2 rounded-lg text-gray-300 hover:text-neutral hover:bg-primary transition-colors"
          :class="{ 'text-accent bg-primary': $route.path === link.path }"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '菜單', path: '/menu' },
  { name: 'AI 推薦', path: '/ai-recommend' },
  { name: '購物車', path: '/cart' }
]
</script>