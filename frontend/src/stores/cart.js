import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'ramen-cart'

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const useCartStore = defineStore('cart', () => {
  const saved = loadFromStorage()

  // State — restored from localStorage on init
  const items = ref(saved?.items ?? [])
  const customerName = ref(saved?.customerName ?? '')
  const tableNumber = ref(saved?.tableNumber ?? '')
  const notes = ref(saved?.notes ?? '')

  // Persist current state synchronously after every mutation
  const persist = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        items: items.value,
        customerName: customerName.value,
        tableNumber: tableNumber.value,
        notes: notes.value,
      }))
    } catch {}
  }

  // Getters
  const itemCount = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((total, item) => {
      const toppingsTotal = item.toppings?.reduce((sum, t) => sum + Number(t.price || 0), 0) ?? 0
      return total + (Number(item.price) * item.quantity) + (toppingsTotal * item.quantity)
    }, 0)
  )

  const isEmpty = computed(() => items.value.length === 0)

  // Actions
  const addItem = (menuItem, options = {}) => {
    const existingIndex = items.value.findIndex(item =>
      item.menuId === menuItem.id &&
      JSON.stringify(item.customizations) === JSON.stringify(options.customizations ?? {}) &&
      JSON.stringify((item.toppings ?? []).map(t => t.id).sort()) ===
      JSON.stringify((options.toppings ?? []).map(t => t.id).sort())
    )

    if (existingIndex > -1) {
      items.value[existingIndex] = {
        ...items.value[existingIndex],
        quantity: items.value[existingIndex].quantity + (options.quantity || 1),
      }
    } else {
      items.value.push({
        id: Date.now(),
        menuId: menuItem.id,
        name: menuItem.name,
        description: menuItem.description,
        price: Number(menuItem.price),
        image: menuItem.image,
        quantity: options.quantity || 1,
        customizations: options.customizations ?? {},
        toppings: options.toppings ?? [],
      })
    }
    persist()
  }

  const removeItem = (itemId) => {
    const index = items.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      items.value.splice(index, 1)
      persist()
    }
  }

  const updateQuantity = (itemId, quantity) => {
    const index = items.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      if (quantity <= 0) {
        items.value.splice(index, 1)
      } else {
        items.value[index] = { ...items.value[index], quantity }
      }
      persist()
    }
  }

  const clearCart = () => {
    items.value = []
    customerName.value = ''
    tableNumber.value = ''
    notes.value = ''
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  const setCustomerInfo = (name, table, note = '') => {
    customerName.value = name
    tableNumber.value = table
    notes.value = note
    persist()
  }

  const getOrderData = () => ({
    customerName: customerName.value,
    phone: tableNumber.value,
    specialRequests: notes.value,
    items: items.value.map(item => ({
      menuId: item.menuId,
      quantity: item.quantity,
      customizations: item.customizations,
      toppings: (item.toppings ?? []).map(t => t.id),
    })),
  })

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
    getOrderData,
  }
})
