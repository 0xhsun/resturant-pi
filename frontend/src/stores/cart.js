import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([])
  const customerName = ref('')
  const tableNumber = ref('')
  const notes = ref('')

  // Getters
  const itemCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      const itemTotal = item.price * item.quantity
      const toppingsTotal = item.toppings?.reduce((sum, t) => sum + t.price, 0) || 0
      return total + itemTotal + (toppingsTotal * item.quantity)
    }, 0)
  })

  const isEmpty = computed(() => items.value.length === 0)

  // Actions
  const addItem = (menuItem, options = {}) => {
    const existingItem = items.value.find(item => 
      item.menuId === menuItem.id && 
      JSON.stringify(item.customizations) === JSON.stringify(options.customizations) &&
      JSON.stringify(item.toppings?.map(t => t.id).sort()) === 
      JSON.stringify(options.toppings?.map(t => t.id).sort())
    )

    if (existingItem) {
      existingItem.quantity += options.quantity || 1
    } else {
      items.value.push({
        id: Date.now(),
        menuId: menuItem.id,
        name: menuItem.name,
        description: menuItem.description,
        price: menuItem.price,
        image: menuItem.image,
        quantity: options.quantity || 1,
        customizations: options.customizations || {},
        toppings: options.toppings || []
      })
    }
  }

  const removeItem = (itemId) => {
    const index = items.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  const updateQuantity = (itemId, quantity) => {
    const item = items.value.find(item => item.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeItem(itemId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    items.value = []
    customerName.value = ''
    tableNumber.value = ''
    notes.value = ''
  }

  const setCustomerInfo = (name, table, note = '') => {
    customerName.value = name
    tableNumber.value = table
    notes.value = note
  }

  const getOrderData = () => {
    return {
      customerName: customerName.value,
      phone: tableNumber.value,
      specialRequests: notes.value,
      items: items.value.map(item => ({
        menuId: item.menuId,
        quantity: item.quantity,
        customizations: item.customizations,
        toppings: item.toppings.map(t => t.id)
      }))
    }
  }

  return {
    items,
    customerName,
    tableNumber,
    notes,
    itemCount,
    totalPrice,
    isEmpty,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    setCustomerInfo,
    getOrderData
  }
})