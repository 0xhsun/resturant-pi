<template>
  <div class="card group cursor-pointer" @click="$emit('click')">
    <div class="relative aspect-[4/3] overflow-hidden">
      <img 
        :src="menu.image || '/placeholder-ramen.jpg'" 
        :alt="menu.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
      
      <!-- Popular Badge -->
      <div v-if="menu.isPopular" class="absolute top-3 left-3">
        <span class="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
          人氣推薦
        </span>
      </div>

      <!-- Spicy Badge -->
      <div v-if="menu.spicyLevel > 0" class="absolute top-3 right-3">
        <div class="flex space-x-0.5">
          <span 
            v-for="n in menu.spicyLevel" 
            :key="n"
            class="text-red-500 text-lg"
          >🌶️</span>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div class="flex items-start justify-between mb-2">
        <h3 class="text-lg font-bold text-neutral group-hover:text-accent transition-colors">
          {{ menu.name }}
        </h3>
        <span class="text-xl font-bold text-accent">
          ${{ formatPrice(menu.price) }}
        </span>
      </div>
      
      <p class="text-gray-400 text-sm mb-3 line-clamp-2">
        {{ menu.description }}
      </p>

      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-500">
          {{ menu.categoryName || '拉麵' }}
        </span>
        <button 
          @click.stop="$emit('add-to-cart')"
          class="btn-primary text-sm py-2 px-4"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  menu: {
    type: Object,
    required: true
  }
})

defineEmits(['click', 'add-to-cart'])

const formatPrice = (price) => {
  return price?.toLocaleString('zh-TW') || '0'
}
</script>