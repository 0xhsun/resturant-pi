import { defineStore } from 'pinia'
import { ref } from 'vue'
import { orderApi } from '@/services/api'

export const useOrderStore = defineStore('order', () => {
  // State
  const currentOrder = ref(null)
  const orderStatus = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Actions
  const createOrder = async (orderData) => {
    loading.value = true
    error.value = null
    try {
      const response = await orderApi.create(orderData)
      currentOrder.value = response.data
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || '訂單建立失敗'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchOrder = async (orderId) => {
    loading.value = true
    error.value = null
    try {
      const response = await orderApi.getById(orderId)
      currentOrder.value = response.data
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || '查詢訂單失敗'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchOrderStatus = async (orderId) => {
    try {
      const response = await orderApi.getStatus(orderId)
      orderStatus.value = response.data
      return response.data
    } catch (err) {
      console.error('Failed to fetch order status:', err)
    }
  }

  const clearCurrentOrder = () => {
    currentOrder.value = null
    orderStatus.value = null
  }

  return {
    currentOrder,
    orderStatus,
    loading,
    error,
    createOrder,
    fetchOrder,
    fetchOrderStatus,
    clearCurrentOrder
  }
})