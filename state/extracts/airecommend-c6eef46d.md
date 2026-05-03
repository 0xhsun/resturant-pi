<template>
  <div class="min-h-screen py-8 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
          <span class="text-3xl">🤖</span>
        </div>
        <h1 class="section-title">AI 智能推薦</h1>
        <p class="section-subtitle mb-0">告訴我們您的喜好，讓 AI 為您推薦最適合的拉麵</p>
      </div>

      <!-- Preferences Form -->
      <div v-if="!recommendation" class="card p-6 md:p-8">
        <div class="space-y-6">
          <!-- Taste Preference -->
          <div>
            <label class="block text-neutral font-semibold mb-3">口味偏好</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                v-for="taste in tasteOptions"
                :key="taste.value"
                @click="togglePreference('taste', taste.value)"
                class="p-3 rounded-lg border-2 transition-all text-center"
                :class="preferences.taste.includes(taste.value)
                  ? 'border-accent bg-accent/10 text-neutral'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'"
              >
                <span class="text-2xl block mb-1">{{ taste.icon }}</span>
                <span class="text-sm">{{ taste.label }}</span>
              </button>
            </div>
          </div>

          <!-- Spicy Level -->
          <div>
            <label class="block text-neutral font-semibold mb-3">辣度承受</label>
            <div class="flex gap-3">
              <button
                v-for="level in spicyLevels"
                :key="level.value"
                @click="preferences.spicy = level.value"
                class="flex-1 p-3 rounded-lg border-2 transition-all"
                :class="preferences.spicy === level.value
                  ? 'border-accent bg-accent/10 text-neutral'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'"
              >
                <span class="text-xl block mb-1">{{ level.icon }}</span>
                <span class="text-sm">{{ level.label }}</span>
              </button>
            </div>
          </div>

          <!-- Dietary Restrictions -->
          <div>
            <label class="block text-neutral font-semibold mb-3">飲食限制</label>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="diet in dietaryOptions"
                :key="diet.value"
                @click="togglePreference('dietary', diet.value)"
                class="px-4 py-2 rounded-lg border-2 transition-all"
                :class="preferences.dietary.includes(diet.value)
                  ? 'border-accent bg-accent/10 text-neutral'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500'"
              >
                {{ diet.label }}
              </button>
            </div>
          </div>

          <!-- Additional Notes -->
          <div>
            <label class="block text-neutral font-semibold mb-3">
              其他需求
              <span class="text-gray-500 text-sm font-normal">（選填）</span>
            </label>
            <textarea
              v-model="preferences.notes"
              rows="3"
              placeholder="例如：今天想吃得清爽一點、想要有飽足感..."
              class="input-field resize-none"
            />
          </div>

          <button
            @click="getRecommendation"
            :disabled="isLoading || !hasValidPreferences"
            class="w-full btn-primary py-4 text-lg"
          >
            <span v-if="isLoading">
              <span class="inline-block animate-spin mr-2">⏳</span>
              AI 分析中...
            </span>
            <span v-else>
              <span class="mr-2">✨</span>
              獲取推薦
            </span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else-if="isLoading" class="card p-12 text-center">
        <div class="relative w-24 h-24 mx-auto mb-6">
          <div class="absolute inset-0 border-4 border-accent/20 rounded-full"/>
          <div class="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"/>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-3xl">🍜</span>
          </div>
        </div>
        <h3 class="text-xl text-neutral mb-2">AI 正在分析您的喜好</h3>
        <p class="text-gray-400">請稍候，為您尋找最適合的拉麵...</p>
      </div>

      <!-- Recommendation Result -->
      <div v-else-if="recommendation" class="space-y-6">
        <div class="card p-6 md:p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl">🎯</span>
            <h2 class="text-xl font-bold text-neutral">為您推薦</h2>
          </div>

          <!-- Recommended Menu -->
          <div v-if="recommendation.menu" class="flex flex-col md:flex-row gap-6">
            <img
              :src="recommendation.menu.image || '/placeholder-ramen.jpg'"
              :alt="recommendation.menu.name"
              class="w-full md:w-48 h-48 object-cover rounded-lg"
            >
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-neutral mb-2">
                {{ recommendation.menu.name }}
              </h3>
              <p class="text-gray-400 mb-4">{{ recommendation.menu.description }}</p>
              <div class="flex items-center gap-4 mb-4">
                <span class="text-2xl font-bold text-accent">
                  ${{ formatPrice(recommendation.menu.price) }}
                </span>
                <span 
                  v-if="recommendation.menu.isPopular"
                  class="bg-accent/20 text-accent text-sm px-2 py-1 rounded"
                >
                  人氣商品
                </span>
              </div>
              
              <!-- AI Reason -->
              <div class="bg-primary rounded-lg p-4 mb-4">
                <p class="text-sm text-gray-400 mb-1">AI 推薦理由</p>
                <p class="text-neutral">{{ recommendation.reason }}</p>
              </div>

              <div class="flex gap-3">
                <button
                  @click="addToCart(recommendation.menu)"
                  class="btn-primary flex-1"
                >
                  加入購物車
                </button>
                <button
                  @click="viewDetail(recommendation.menu)"
                  class="btn-outline"
                >
                  查看詳情
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Suggestions -->
        <div v-if="recommendation.alternatives?.length" class="card p-6">
          <h3 class="text-lg font-bold text-neutral mb-4">其他推薦</h3>
          <div class="space-y-3">
            <div
              v-for="alt in recommendation.alternatives"
              :key="alt.id"
              class="flex items-center gap-4 p-3 bg-primary rounded-lg cursor-pointer hover:bg-neutral-dark transition-colors"
              @click="viewDetail(alt)"
            >
              <img
                :src="alt.image || '/placeholder-ramen.jpg'"
                :alt="alt.name"
                class="w-16 h-16 object-cover rounded"
              >
              <div class="flex-1">
                <h4 class="font-semibold text-neutral">{{ alt.name }}</h4>
                <p class="text-sm text-gray-400">{{ alt.reason }}</p>
              </div>
              <span class="text-accent font-bold">${{ formatPrice(alt.price) }}</span>
            </div>
          </div>
        </div>

        <!-- Reset Button -->
        <button
          @click="reset"
          class="w-full btn-outline"
        >
          重新選擇偏好
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { aiApi } from '@/services/api'

const router = useRouter()
const cartStore = useCartStore()

const isLoading = ref(false)
const recommendation = ref(null)

const tasteOptions = [
  { value: 'rich', label: '濃郁', icon: '🍜' },
  { value: 'light', label: '清淡', icon: '🌿' },
  { value: 'salty', label: '鹹香', icon: '🧂' },
  { value: 'sweet', label: '甘甜', icon: '🍯' }
]

const spicyLevels = [
  { value: 0, label: '不辣', icon: '😊' },
  { value: 1, label: '微辣', icon: '🌶️' },
  { value: 2, label: '中辣', icon: '🌶️🌶️' },
  { value: 3, label: '大辣', icon: '🌶️🌶️🌶️' }
]

const dietaryOptions = [
  { value: 'vegetarian', label: '素食' },
  { value: 'no-pork', label: '不吃豬肉' },
  { value: 'no-garlic', label: '不吃蒜' },
  { value: 'low-sodium', label: '低鈉' }
]

const preferences = ref({
  taste: [],
  spicy: 0,
  dietary: [],
  notes: ''
})

const hasValidPreferences = computed(() => {
  return preferences.value.taste.length > 0
})

const togglePreference = (type, value) => {
  const arr = preferences.value[type]
  const index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  } else {
    arr.push(value)
  }
}

const getRecommendation = async () => {
  isLoading.value = true
  try {
    const response = await aiApi.recommend(preferences.value)
    recommendation.value = response.data.data
  } catch (err) {
    console.error('AI recommendation failed:', err)
    // Fallback to mock recommendation
    recommendation.value = {
      menu: {
        id: 1,
        name: '特製豚骨拉麵',
        description: '濃郁豚骨湯頭搭配軟嫩叉燒，本店招牌',
        price: 280,
        image: null,
        isPopular: true
      },
      reason: '根據您的口味偏好，這碗濃郁系拉麵非常適合您。湯頭經過 12 小時熬煮，口感醇厚不膩口。',
      alternatives: [
        { id: 2, name: '味噌拉麵', price: 260, reason: '如果您想嘗試不同風味', image: null },
        { id: 3, name: '鹽味雞湯拉麵', price: 250, reason: '較為清爽的選擇', image: null }
      ]
    }
  } finally {
    isLoading.value = false
  }
}

const addToCart = (menu) => {
  cartStore.addItem(menu, { quantity: 1 })
  router.push('/cart')
}

const viewDetail = (menu) => {
  router.push(`/menu/${menu.id}`)
}

const reset = () => {
  recommendation.value = null
  preferences.value = {
    taste: [],
    spicy: 0,
    dietary: [],
    notes: ''
  }
}

const formatPrice = (price) => {
  return price?.toLocaleString('zh-TW') || '0'
}
</script>