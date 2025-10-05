<template>
  <Card class="business-card" :class="{ featured }">
    <template #content>
      <div class="business-content">
        <div class="business-image">
          <div v-if="featured && business.images && business.images.length > 1" class="carousel">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div 
                v-for="(image, index) in business.images" 
                :key="index"
                class="carousel-slide"
              >
                <img 
                  :src="image" 
                  :alt="`${business.name} - фото ${index + 1}`" 
                  class="business-photo"
                  @error="handleImageError"
                />
              </div>
            </div>
            
            <Button 
              icon="pi pi-chevron-left"
              class="carousel-btn prev p-button-rounded p-button-text"
              @click="prevSlide" 
              v-if="business.images.length > 1"
            />
            <Button 
              icon="pi pi-chevron-right"
              class="carousel-btn next p-button-rounded p-button-text"
              @click="nextSlide" 
              v-if="business.images.length > 1"
            />
            
            <div class="carousel-indicators" v-if="business.images.length > 1">
              <Button 
                v-for="(_, index) in business.images" 
                :key="index"
                class="indicator p-button-text"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
              />
            </div>
          </div>
          <img 
            v-else
            :src="featured && business.images ? business.images[0] : business.image" 
            :alt="business.name" 
            class="business-photo"
            @error="handleImageError"
          />
          
          <!-- Кнопка $$$ слева -->
          <Button 
            label="$$$"
            class="price-btn p-button-success"
          />
          
          <Button 
            icon="pi pi-heart"
            class="like-btn p-button-rounded p-button-secondary"
            :class="{ 'p-button-danger': business.isLiked }"
            @click="$emit('like', business.id)"
          />
        </div>
        
        <div class="business-info">
          <div class="business-header">
            <div class="business-name-rating">
              <h2 class="business-name">
                {{ business.name }}
              </h2>
              <div class="rating-section">
                <Rating 
                  :modelValue="business.rating" 
                  :readonly="true" 
                  :cancel="false"
                  class="rating-stars"
                />
                <div class="rating-text">{{ business.rating }} ({{ business.reviews }} отзывов)</div>
              </div>
            </div>
            <div class="header-right">
              <!-- Геолокация с иконкой справа сверху -->
              <div class="location-section">
                <i class="pi pi-map-marker location-icon"></i>
                <span class="location-text">{{ business.location }}</span>
              </div>
              <Tag v-if="business.type" :value="business.type" class="business-type p-chip" />
            </div>
          </div>
          
          <div class="services">
            <Chip 
              v-for="service in business.services" 
              :key="service"
              :label="service"
              class="service-tag"
            />
          </div>
          
          <div class="business-status" :class="business.open !== false ? 'open' : 'closed'">
            {{ business.status }}
          </div>
          
          <p class="description">
            <i class="pi pi-envelope" aria-hidden="true"></i>
            {{ business.description }}
          </p>
          
          <Button 
            :label="business.id === 'barbarossa' ? 'Read more...' : 'Read more'" 
            icon="pi pi-arrow-right"
            class="read-more-btn p-button-outlined"
            @click="$emit('details', business.id)"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Rating from 'primevue/rating'
import Chip from 'primevue/chip'
import Tag from 'primevue/tag'

export default {
  name: 'BusinessCard',
  components: {
    Card,
    Button,
    Rating,
    Chip,
    Tag
  },
  props: {
    business: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.location !== undefined
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  emits: ['like', 'details'],
  setup(props) {
    const currentSlide = ref(0)

    const nextSlide = () => {
      if (props.business.images && props.business.images.length > 1) {
        currentSlide.value = (currentSlide.value + 1) % props.business.images.length
      }
    }

    const prevSlide = () => {
      if (props.business.images && props.business.images.length > 1) {
        currentSlide.value = currentSlide.value === 0 
          ? props.business.images.length - 1 
          : currentSlide.value - 1
      }
    }

    const goToSlide = (index) => {
      if (props.business.images && props.business.images.length > 1) {
        currentSlide.value = index
      }
    }

    const handleImageError = (event) => {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+0J7RgtC60LvRjtGH0LXQvdGLINC00LvRjyDQuNC80LXQvdC4PC90ZXh0Pjwvc3ZnPg=='
    }

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide,
      handleImageError
    }
  }
}
</script>

<style scoped>

.business-card {
  height: 250px;
  width: 150%;
  overflow: hidden;
}

.business-card.featured {
  border: 2px solid #96969640;
}

.business-card:hover {
  border: 2px solid rgb(66, 171, 232);
}

.business-content {
  display: flex;
  gap: 20px;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.business-image {
  position: relative;
  width: 180px;
  flex-shrink: 0;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: -20px;
}

.business-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.business-card.featured .business-image {
  position: relative;
  overflow: hidden;
}

.business-card.featured .carousel {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.business-card.featured .carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  margin-top: -10px;
}

.business-card.featured .carousel-slide {
  flex: 0 0 100%;
  height: 100%;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border: 1px solid #000000 !important;
  color: black;
}

.carousel-btn.prev {
  left: 5px;
}

.carousel-btn.next {
  right: 5px;
}

:deep(.carousel-btn.p-button) {
  width: 20px;
  height: 20px;
  margin-top: 60px;
}

:deep(.carousel-btn .p-button-icon) {
  font-size: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 10;
}

:deep(.indicator.p-button) {
  width: 12px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  min-width: auto;
}

:deep(.indicator.p-button.active) {
  background: white;
  transform: scale(1.2);
}


.price-btn {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  background-color: #cecece !important;
  border: none;
}

:deep(.price-btn.p-button) {
  width: 30px;
  height: 30px;
}

:deep(.price-btn) {
  font-size: 14px;
  color: rgb(156, 156, 156);
}

.like-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
}

:deep(.like-btn.p-button) {
  width: 36px;
  height: 36px;
}

.business-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  width: 100%;
  margin-top: -30px;
}

.business-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

.business-name-rating {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  width: 100%;
}

.business-name {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1f2937;
  width: 100%;
  overflow: hidden;
}

.business-name-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

:deep(.hot-badge.p-tag) {
  font-size: 11px;
  flex-shrink: 0;
}

.rating-section {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  flex-wrap: wrap;
}

:deep(.rating-stars .p-rating-icon) {
  color: #f59e0b;
  font-size: 13px;
}

.rating-text {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  white-space: nowrap;
}


.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
  max-width: 40%;
}


.location-section {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #6b7280;
  text-align: right;
}

.location-icon {
  font-size: 12px;
  color: #7a7a7a;
  flex-shrink: 0;
}

.location-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

:deep(.business-type.p-chip) {
  background: #eff6ff;
  color: #1d4ed8;
  font-weight: 600;
  align-self: flex-end;
  font-size: 11px;
  white-space: nowrap;
}

.services {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: 100%;
}

:deep(.service-tag.p-chip) {
  background: #f3f4f6;
  color: #374151;
  font-size: 11px;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.business-status {
  font-size: 12px;
  font-weight: 600;
  padding: 2px 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.business-status.open {
  color: #000000;
}

.business-status.closed {
  color: #dc2626;
}

.description {
  font-size: 12px;
  color: #6b7280;
  line-height: 1.3;
  margin: 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: flex;
  align-items: flex-start;
  gap: 8px; 
}

:deep(.read-more-btn.p-button) {
  align-self: flex-start;
  margin-top: auto;
  font-size: 12px;
  padding: 5px 10px;
  border: none;
  white-space: nowrap;
  color: #43a8f0;
}
</style>