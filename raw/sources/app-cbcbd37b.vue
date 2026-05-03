<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
    <CartBadge />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useMenuStore } from '@/stores/menu'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import CartBadge from '@/components/CartBadge.vue'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.fetchMenus()
  menuStore.fetchCategories()
  menuStore.fetchToppings()
  menuStore.fetchCustomizations()
})
</script>