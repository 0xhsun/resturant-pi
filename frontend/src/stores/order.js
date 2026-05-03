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
      console.log('API 響應:', response.data)
      
      // 處理後端包裝格式 { success: true, data: {...}, message: '...' }
      const result = response.data.data || response.data
      currentOrder.value = result
      return result
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.response?.data?.error || err.message || '訂單建立失敗'
      error.value = errorMsg
      console.error('❌ 訂單建立失敗:', errorMsg, err.response?.data)
      throw new Error(errorMsg)
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