<template>
  <RouterLink 
    to="/cart"
    class="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110"
    :class="{ 'animate-bounce-slow': cartStore.itemCount > 0 }"
  >
    <div class="relative">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
      <span 
        v-if="cartStore.itemCount > 0"
        class="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
      >
        {{ cartStore.itemCount > 99 ? '99+' : cartStore.itemCount }}
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>