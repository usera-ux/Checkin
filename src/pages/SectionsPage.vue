<template>
  <div class="main-container">
    <AppHeader />   
    <div class="container">
      <div class="breadcrumb">
        <span>Главная / Красота, спа и массаж / Мужские барбер шопы</span>
      </div>
      <h1 class="page-title">Лучшие компании в категории: Мужские барбер шопы</h1>
      
      <div class="layout">
        <div class="sidebar">
          <Card class="filter-section">
            <template #content>
              <div class="filter-group">
                <h4>Разделы</h4>
                <div class="sections-list">
                  <div 
                    v-for="(section, index) in sections" 
                    :key="section.name"
                    class="section-item"
                    :class="{ 'last-item': index === sections.length - 1 }"
                    @mouseenter="hoveredSection = section.name"
                    @mouseleave="hoveredSection = null"
                  >
                    <div class="section-content">
                      <i :class="section.icon" class="section-icon"></i>
                      <span class="section-name">{{ section.name }}</span>
                      <i 
                        class="pi pi-chevron-left section-arrow" 
                        :class="{ 'visible': hoveredSection === section.name }"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <h4>Ценовая категория</h4>
                <div class="price-toggle">
                  <div 
                    v-for="price in priceOptions" 
                    :key="price.value"
                    class="price-option"
                    :class="{ 
                      'active': selectedPrice === price.value,
                      'first': price.value === 'low',
                      'last': price.value === 'high'
                    }"
                    @click="selectPrice(price.value)"
                  >
                    {{ price.label }}
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <h4>Опции</h4>
                <div class="options-list">
                  <div 
                    v-for="option in options" 
                    :key="option.value"
                    class="option-item"
                  >
                    <Checkbox 
                      v-model="selectedOptions" 
                      :value="option.value" 
                      :inputId="option.value"
                      :binary="true"
                    />
                    <label :for="option.value" class="option-label">{{ option.label }}</label>
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <h4>Дистанция</h4>
                <div class="options-list">
                  <div 
                    v-for="distance in distances" 
                    :key="distance.value"
                    class="option-item"
                  >
                    <RadioButton 
                      v-model="selectedDistance" 
                      :value="distance.value" 
                      :inputId="distance.value"
                      name="distance"
                    />
                    <label :for="distance.value" class="option-label">{{ distance.label }}</label>
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <h4>Категория</h4>
                <div class="categories-rows">
                  <div 
                    v-for="category in categories" 
                    :key="category.value"
                    class="category-row"
                    :class="{ 'active': selectedCategory === category.value }"
                    @click="selectCategory(category.value)"
                  >
                    <div class="category-content">
                      <span class="category-name">{{ category.label }}</span>
                      <i class="pi pi-check category-check" v-if="selectedCategory === category.value"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="filter-group">
                <h4>Range ratio</h4>
                <div class="range-slider">
                  <div class="slider-track" @click="handleTrackClick">
                    <div 
                      class="slider-thumb"
                      :style="{ left: sliderPosition + '%' }"
                      @mousedown="startDrag"
                    ></div>
                  </div>
                  <div class="stat-buttons">
                    <div 
                      class="stat-button"
                      :class="{ 'active': selectedStat === 'stat1' }"
                      @click="selectStat('stat1')"
                    >
                      <span class="stat-label">Stat 1 count</span>
                    </div>
                    <div 
                      class="stat-button"
                      :class="{ 'active': selectedStat === 'stat2' }"
                      @click="selectStat('stat2')"
                    >
                      <span class="stat-label">Stat 2 count</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
        
        <div class="content">
          <div class="content-layout">
            <div class="business-list">
              <BusinessCard 
                :business="hunterBarbershop"
                :featured="true"
                @like="toggleLike"
                @details="showDetails"
              />

              <BusinessCard 
                v-for="business in otherBusinesses" 
                :key="business.id"
                :business="business"
                @like="toggleLike"
                @details="showDetails"
              />
            </div>
            
            <div class="map-section">
              <Card class="map-card">
                <template #content>
                  <img 
                    src="../assets/map.png" 
                    alt="Карта с расположением барбершопов" 
                    class="map-image"
                    @error="handleImageError"
                  /> 
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Pagination 
      :current-page="currentPage"
      :total-pages="125"
      @page-change="handlePageChange"
    />

    <AppFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'

import AppHeader from '../components/AppHeader.vue'
import BusinessCard from '../components/BusinessCard.vue'
import Pagination from '../components/Pagination.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'BarbershopListing',
  components: {
    Card,
    Checkbox,
    RadioButton,
    AppHeader,
    BusinessCard,
    Pagination,
    AppFooter
  },
  setup() {
    const hoveredSection = ref(null)
    const selectedPrice = ref('low')
    const selectedOptions = ref(['cards', 'bargain'])
    const selectedDistance = ref('')
    const selectedCategory = ref('mens')
    const sliderPosition = ref(50)
    const isDragging = ref(false)
    const currentPage = ref(100)
    const selectedStat = ref('stat1')

    const sections = ref([
      { name: "Красота, спа и массаж", icon: "pi pi-sparkles" },
      { name: "Учителя и репетиторы", icon: "pi pi-users" },
      { name: "Психотерапевты", icon: "pi pi-heart" },
      { name: "Тренинги и курсы", icon: "pi pi-book" },
      { name: "Автомастерские", icon: "pi pi-cog" },
      { name: "Автомойки", icon: "pi pi-car" },
      { name: "Workout и тренировки", icon: "pi pi-bolt" },
      { name: "Медицинские центры", icon: "pi pi-plus-circle" }
    ])
    
    const priceOptions = ref([
      { value: "low", label: "$$" },
      { value: "medium", label: "$$" },
      { value: "high", label: "$$$" }
    ])
    
    const options = ref([
      { value: "open", label: "Открыто сейчас 12:42" },
      { value: "mobile", label: "Возможен выезд специалистов" },
      { value: "cards", label: "Принимают банковские карты" },
      { value: "bargain", label: "Можно поторговаться о цене" },
      { value: "family", label: "Можно с детьми и животными" }
    ])
    
    const distances = ref([
      { value: "10min", label: "10 минут пешком от меня" },
      { value: "30min", label: "30 минут прогулочного шага" }
    ])
    
    const categories = ref([
      { value: "mens", label: "Мужские стрижки" },
      { value: "beard", label: "Стрижки усов и бороды" },
      { value: "head", label: "Стрижка головы" }
    ])
    
    const hunterBarbershop = ref({
      id: 'hunter',
      name: "Hunter barbershop",
      hot: true,
      rating: 4.5,
      reviews: 25,
      services: ["Barber Shop","Мужские прически", "Стрижка бороды", "Стрижка усов"],
      open: true,
      location:'Район: Метро Райнбек Батыра',
      status: "Открыто до 22:00",
      description: "For & Jane is 100% locally and diversity owned. Specializing in dimensional colors, curated cuts for all lengths and textures, the most innovative hair transformation, and beyond. At For & Jane, we understand the importance of creating incredible results and even better experiences.",
      images: [
        '/images/barber1.png',
        '/images/barber2.png', 
        '/images/barber3.png'
      ],
      isLiked: false
    })
    
    const otherBusinesses = ref([
      {
        id: 'barbarossa',
        name: "BARBAROSSA",
        hot: false,
        rating: 4,
        reviews: 133,
        services: ["Мужские прически", "Стрижка бороды", "Стрижка усов"],
        open: false,
        status: "Закрыто до 09:00",
        location:'Район: Улица Абая',
        description: "Барбершоп БарбароссА Алматы – это место, которое навсегда изменит ваше представление о барбершопе. 160 квадратов мужской территории. 8 кресел. Мастера прошедшие самый строгий отбор. Мы ждем вас в самом толчком барбершопе города Алматы!",
        image: './images/barber2.png',
        isLiked: false
      },
      {
        id: 'barberhouse',
        name: "BarberHouse",
        hot: false,
        rating: 3,
        reviews: 0,
        services: ["Мужские прически", "Стрижка усов", "Воск носа"],
        open: true,
        status: "Открыто до 22:00",
        location:'Район: Достык',
        description: "Именно здесь ты можешь быстро, дешево и без церемоний привести себя в порядок. Для полного погружения в атмосферу мы предлагаем гостям алкогольные или энергетические напитки на выбор, а для любителей игр – PlayStation.",
        image: './images/barber3.png',
        isLiked: false
      },
      {
        id: 'barbershopport',
        name: "Barbershop PORT",
        hot: false,
        rating: 3,
        reviews: 0,
        services: ["Мужские прически", "Стрижка усов", "Воск носа"],
        open: true,
        status: "Открыто до 22:00",
        location:'Район: Esentai mall',
        description: "Именно здесь ты можешь быстро, дешево и без церемоний привести себя в порядок. Для полного погружения в атмосферу мы предлагаем гостям алкогольные или энергетические напитки на выбор, а для любителей игр – PlayStation.",
        image: './images/barber4.png',
        isLiked: false
      }
    ])

    const selectPrice = (priceValue) => {
      selectedPrice.value = priceValue
    }

    const selectCategory = (categoryValue) => {
      selectedCategory.value = categoryValue
    }

    const selectStat = (statValue) => {
      selectedStat.value = statValue
    }

    const startDrag = (event) => {
      isDragging.value = true
      event.preventDefault()
      
      const updatePosition = (moveEvent) => {
        if (!isDragging.value) return
        
        const track = document.querySelector('.slider-track')
        const rect = track.getBoundingClientRect()
        let position = ((moveEvent.clientX - rect.left) / rect.width) * 100
        position = Math.max(0, Math.min(100, position))
        sliderPosition.value = position
      }
      
      const stopDrag = () => {
        isDragging.value = false
        document.removeEventListener('mousemove', updatePosition)
        document.removeEventListener('mouseup', stopDrag)
      }
      
      document.addEventListener('mousemove', updatePosition)
      document.addEventListener('mouseup', stopDrag)
    }

    const handleTrackClick = (event) => {
      const track = event.currentTarget
      const rect = track.getBoundingClientRect()
      let position = ((event.clientX - rect.left) / rect.width) * 100
      position = Math.max(0, Math.min(100, position))
      sliderPosition.value = position
    }

    const toggleLike = (businessId) => {
      if (businessId === 'hunter') {
        hunterBarbershop.value.isLiked = !hunterBarbershop.value.isLiked
      } else {
        const business = otherBusinesses.value.find(b => b.id === businessId)
        if (business) {
          business.isLiked = !business.isLiked
        }
      }
    }

    const showDetails = (businessId) => {
      console.log('Показать детали для:', businessId)
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0jOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0J7RgtC60LvRjtGH0LXQvdGLINC00LvRjyDQuNC80LXQvdC4PC90ZXh0Pjwvc3ZnPg=='
    }

    const handlePageChange = (page) => {
      currentPage.value = page
    }

    return {
      hoveredSection,
      selectedPrice,
      selectedOptions,
      selectedDistance,
      selectedCategory,
      sliderPosition,
      isDragging,
      currentPage,
      selectedStat,
      sections,
      priceOptions,
      options,
      distances,
      categories,
      hunterBarbershop,
      otherBusinesses,
      selectPrice,
      selectCategory,
      selectStat,
      startDrag,
      handleTrackClick,
      toggleLike,
      showDetails,
      handleImageError,
      handlePageChange
    }
  }
}
</script>

<style scoped>
.main-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1400px;
  position: relative;
  margin: auto;
  padding-top: 40px;
}

.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  margin-left: 237px;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-left: 235px;
  margin-bottom: 30px;
}

.layout {
  display: flex;
  gap: 30px;
}

.sidebar {
  width: 300px;
  flex-shrink: 0;
  margin-left: -100px;
}

.filter-section {
  margin-top: -95px;
}

:deep(.p-card) {
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #e5e7eb;
}

:deep(.p-card-title) {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}

.filter-group {
  margin-bottom: 10px;
}

.filter-group h4 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 3px;
  color: #374151;
}

.sections-list {
  display: flex;
  flex-direction: column;
}

.section-item {
  padding: 12px 8px;
  border-bottom: 1px solid #f3f4f6;
  color: #6b7280;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.section-item:hover {
  background-color: #f9fafb;
}

.section-item.last-item {
  border-bottom: none;
}

.section-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.section-icon {
  font-size: 16px;
  color: #6b7280;
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.section-name {
  flex: 1;
  font-size: 14px;
  color: #6b7280;
}

.section-arrow {
  font-size: 12px;
  color: #9ca3af;
  margin-left: auto;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.section-arrow.visible {
  opacity: 1;
}

.price-toggle {
  display: flex;
  border: 1px solid #e5e7eb;
  border-radius: 19px;
  overflow: hidden;
  background: #f9fafb;
}

.price-option {
  flex: 1;
  padding: 10px 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border-right: 1px solid #e5e7eb;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  background: white;
}

.price-option:last-child {
  border-right: none;
}

.price-option.active {
  background:#030304;
  color: white;
  font-weight: 600;
}

.price-option:hover:not(.active) {
  background: #f3f4f6;
}

.price-option.first {
  border-radius: 6px 0 0 6px;
}

.price-option.last {
  border-radius: 0 6px 6px 0;
}

.categories-rows {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-row {
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  width: 200px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
}

.category-row.active {
  background: #030304;
  border-color: #030304;
}

.category-row:hover {
  border-color: #030304;
}

.category-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.category-row.active .category-name {
  color: white;
  font-weight: 600;
}

.category-check {
  font-size: 14px;
  color: white;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.option-label {
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
}

:deep(.p-checkbox .p-checkbox-box) {
  border: 2px solid #d1d5db;
  border-radius: 4px;
}

:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background: #030304;
  border-color: #030304;
}

:deep(.p-radiobutton .p-radiobutton-box) {
  border: 2px solid #d1d5db;
}

:deep(.p-radiobutton .p-radiobutton-box.p-highlight) {
  background: #030304;
  border-color: #030304;
}

.range-slider {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slider-track {
  position: relative;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 8px;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #030304;
  border-radius: 50%;
  cursor: grab;
  transition: all 0.1s ease;
}

.slider-thumb:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.1);
}

.stat-buttons {
  display: flex;
  gap: 8px;
}

.stat-button {
  flex: 1;
  padding: 10px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.stat-button:hover {
  border-color: #030304;
}

.stat-button.active {
  background: #030304;
  border-color: #030304;
}

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.stat-button.active .stat-label {
  color: white;
  font-weight: 600;
}

.content {
  flex-grow: 1;
  margin-top: 0; 
}

.content-layout {
  display: flex;
  gap: 20px;
}

.business-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.map-card {
  height: 117%;
  border: none;
  width: 75%;
  margin-left: 300px;
  margin-top: -200px;
}
.map-section{
  width: 50%;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>