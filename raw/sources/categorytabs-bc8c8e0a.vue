<template>
  <div class="flex flex-wrap gap-2 justify-center">
    <button
      @click="$emit('select', null)"
      class="px-4 py-2 rounded-full font-medium transition-all duration-200"
      :class="selectedCategory === null 
        ? 'bg-accent text-white' 
        : 'bg-neutral-dark text-gray-400 hover:text-neutral'"
    >
      全部
    </button>
    <button
      v-for="category in categories"
      :key="category.id"
      @click="$emit('select', category.id)"
      class="px-4 py-2 rounded-full font-medium transition-all duration-200"
      :class="selectedCategory === category.id 
        ? 'bg-accent text-white' 
        : 'bg-neutral-dark text-gray-400 hover:text-neutral'"
    >
      {{ category.name }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => []
  },
  selectedCategory: {
    type: [Number, null],
    default: null
  }
})

defineEmits(['select'])
</script>