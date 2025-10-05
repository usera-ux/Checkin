<template>
  <div class="price-display-wrapper">
    <div class="price-content">
      <div class="price-section">
        <div class="price-range">
          <span class="price-amount">110-120 из 1,250</span>
        </div>
      </div>

      <div class="elements-section">
        <div class="elements-group">
          <div class="number-tags">
            <Button 
              class="pagination-btn prev-btn p-button-text"
              @click="$emit('page-change', currentPage - 1)"
              @mousedown="setButtonActive('prev')"
              @mouseup="clearButtonActive"
              @mouseleave="clearButtonActive"
              :class="{ 'active': activeButton === 'prev' }"
              :disabled="currentPage === 1"
            >
              <i class="pi pi-arrow-left"></i>
              <span>назад</span>
            </Button>
            
            <div class="number-sequence">
              <span class="number">1</span>
              <span class="number">...</span>
              <span class="number">98</span>
              <span class="number">99</span>
              <span class="number active-number">100</span>
              <span class="number">101</span>
              <span class="number">102</span>
              <span class="number">103</span>
              <span class="number">...</span>
              <span class="number">125</span>
            </div>
            
            <Button 
              class="pagination-btn next-btn p-button-text"
              @click="$emit('page-change', currentPage + 1)"
              @mousedown="setButtonActive('next')"
              @mouseup="clearButtonActive"
              @mouseleave="clearButtonActive"
              :class="{ 'active': activeButton === 'next' }"
              :disabled="currentPage === totalPages"
            >
              <span>дальше</span>
              <i class="pi pi-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Button from 'primevue/button'

export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['page-change'],
  setup() {
    const activeButton = ref(null)

    const setButtonActive = (buttonType) => {
      activeButton.value = buttonType
    }

    const clearButtonActive = () => {
      activeButton.value = null
    }

    return {
      activeButton,
      setButtonActive,
      clearButtonActive
    }
  }
}
</script>

<style scoped>
.price-display-wrapper {
  margin-left: 330px;  
  margin-top: -170px;
}

.price-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.price-range {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-left: 50px;
  margin-bottom: 0.5rem;
}

.price-amount {
  font-size: 11px;
  font-weight: 500;
  color: #000000;
  font-family: sans-serif;
}

.elements-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-left: 80px;
}

.elements-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.number-tags {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.number-sequence {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 10px;
}

.number {
  background: white;
  color: #2d3748;
  padding: 0.375rem 0.625rem;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  min-width: 32px;
  text-align: center;
}

.active-number {
  background: #000000 !important;
  color: #ffffff !important;
  border-color: #000000 !important;
}

.pagination-btn {
  background: #edf2f7 !important;
  color: #2d3748 !important;
  padding: 7px 7px!important;
  border-radius: 6px !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  font-family: 'Courier New', monospace !important;
  border: 1px solid #e2e8f0 !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
}

.pagination-btn .pi {
  font-size: 10px;
}

:deep(.pagination-btn.p-button:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>