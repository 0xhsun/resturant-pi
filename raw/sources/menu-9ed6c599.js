import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { menuApi, toppingApi, customizationApi } from '@/services/api'

export const useMenuStore = defineStore('menu', () => {
  // State
  const menus = ref([])
  const categories = ref([])
  const toppings = ref([])
  const customizations = ref([])
  const currentMenu = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const menusByCategory = computed(() => {
    const grouped = {}
    categories.value.forEach(cat => {
      grouped[cat.id] = menus.value.filter(menu => menu.category_id === cat.id)
    })
    return grouped
  })

  const getMenuById = computed(() => (id) => {
    return menus.value.find(menu => menu.id === Number(id))
  })

  // Actions
  const fetchMenus = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await menuApi.getAll()
      menus.value = response.data.data || response.data || []
    } catch (err) {
      error.value = err.message
      console.error('Failed to fetch menus:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchMenuDetail = async (id) => {
    loading.value = true
    error.value = null
    try {
      const response = await menuApi.getById(id)
      currentMenu.value = response.data.data || response.data
      return response.data
    } catch (err) {
      error.value = err.message
      console.error('Failed to fetch menu detail:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await menuApi.getCategories()
      categories.value = response.data.data || response.data || []
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    }
  }

  const fetchToppings = async () => {
    try {
      const response = await toppingApi.getAll()
      toppings.value = response.data.data || response.data || []
    } catch (err) {
      console.error('Failed to fetch toppings:', err)
    }
  }

  const fetchCustomizations = async () => {
    try {
      const response = await customizationApi.getAll()
      customizations.value = response.data.data || response.data || []
    } catch (err) {
      console.error('Failed to fetch customizations:', err)
    }
  }

  return {
    menus,
    categories,
    toppings,
    customizations,
    currentMenu,
    loading,
    error,
    menusByCategory,
    getMenuById,
    fetchMenus,
    fetchMenuDetail,
    fetchCategories,
    fetchToppings,
    fetchCustomizations
  }
})