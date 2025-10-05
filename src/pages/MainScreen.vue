<template>
  <div class="main-screen">
    <AppHeader/>
        <main class="hero-section">
      <div class="background-image">
        <img src="../assets/mainimage.png" alt="Beauty Salon" class="bg-img" />
      </div>

      <div class="content-overlay">
        <div class="parts">
          <div 
            v-for="n in 4" 
            :key="n" 
            class="part"
            :class="{ 'active-part': activePart === n }"
            @click="setActivePart(n)"
          ></div>
        </div>
        
        <div class="text-content">
          <h1 class="main-title">{{ pageTitles[activePart] }}</h1>
          
          <Button 
            icon="pi pi-search" 
            :label="buttonLabels[activePart]" 
            class="search-btn p-button-raised"
            @click="setActivePart(activePart)"
          />
        </div>
      </div>
      <div class="text">
        <h1>Ra Beauty</h1>
        <p>Фото из профиля студии красоты</p>
      </div>
    </main>

    <section class="categories-section" v-if="activePart === 1">
      <div class="categories-container">
        <h1 class="category-title">Категории</h1>
        
        <div class="categories-grid">
          <div class="category-row">
            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/beauty.png" alt="Красота, SPA, Массаж" />
                  </div>
                  <div class="category-text">
                    <h3>Красота, SPA, Массаж</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/tutor.png" alt="Репетиторы" />
                  </div>
                  <div class="category-text">
                    <h3>Репетиторы</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/nurse.png" alt="Психотерапевты" />
                  </div>
                  <div class="category-text">
                    <h3>Психотерапевты</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/tutor.png" alt="Тренинги и курсы" />
                  </div>
                  <div class="category-text">
                    <h3>Тренинги и курсы</h3>
                  </div>
                </div>
              </template>
            </Card>
          </div>

          <div class="category-row">
            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/cto.png" alt="Авто мастерские" />
                  </div>
                  <div class="category-text">
                    <h3>Авто мастерские</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/car.png" alt="Автомойки" />
                  </div>
                  <div class="category-text">
                    <h3>Автомойки</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/workout.png" alt="Workout зоны" />
                  </div>
                  <div class="category-text">
                    <h3>Workout зоны</h3>
                  </div>
                </div>
              </template>
            </Card>

            <Card class="category-card">
              <template #content>
                <div class="category-content">
                  <div class="category-image">
                    <img src="../assets/medicine.png" alt="Медицинские центры" />
                  </div>
                  <div class="category-text">
                    <h3>Медицинские центры</h3>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import AppFooter from '../components/AppFooter.vue';

export default defineComponent({
  name: 'MainScreen',
  components: {
    AppHeader,
    Card,
    Button,
    AppFooter
  },
  data() {
    return {
      activePart: 1,
      pageTitles: {
        1: 'Время для похода в салон красоты',
        2: 'next page',
        3: 'next page',
        4: 'next page'
      },
      buttonLabels: {
        1: 'Салоны красоты',
        2: 'next button',
        3: 'next button',
        4: 'next button'
      },
      showAuthModal: false,
    }
  },
  methods: {
    setActivePart(partNumber) {
      this.activePart = partNumber;
      this.$nextTick(() => {
        const categoriesSection = document.querySelector('.categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
});
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 600px;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
}

.text-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  width: 100%;
}

.main-title {
  font-family: 'Commissioner', sans-serif;
  font-weight: 400;
  font-size: 4.375rem;
  line-height: 1.1;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 800px;
  margin-top: -90px;
}

:deep(.search-btn.p-button) {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #199ee5;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  margin-top: 40px;
}

:deep(.search-btn.p-button:hover) {
  background: #158cce;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

:deep(.search-btn.p-button .p-button-icon) {
  font-size: 1.25rem;
}

.part {
  width: 10px;
  height: 50px;
  background: rgba(255, 255, 255, 0.508);
  margin: 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.part:hover {
  background: rgba(255, 255, 255, 0.7);
}

.part.active-part {
  background: #6CC9FF;
  box-shadow: 0 0 10px rgba(108, 201, 255, 0.5);
}

.parts {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 3;
  margin-left:120px;
  margin-bottom: 4.375rem;
}

.categories-section {
  padding: 4rem 2rem;
  min-height: 60vh;
}

.categories-container {
  max-width: 1400px;
  margin: 0 auto;
}

.category-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
}

.categories-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.category-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.category-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.039);
  overflow: hidden;
}

.category-card:hover{
  border: 2px solid #6CC9Ff;
}

.category-content {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.category-image {
  object-fit: cover;
  width: 70px;
  overflow: hidden;
  margin-left: 35%;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-text {
  padding: 1.5rem;
  text-align: center;
}

.category-text h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  font-family: sans-serif;
}

:deep(.category-card .p-card-content) {
  padding: 0;
}

.text{
  position: absolute;
  bottom: 90px;
  font-size: 12px;
  z-index: 3;
  color: white;
  text-align: center;
  display: block;
  font-family: sans-serif;
}

.text h1{
  margin-left:-1px;
  font-size: 20px;
  font-weight: 600;
  color: #6CC9FF;
  font-family: sans-serif;
}

.text p{
  margin-left: 125px;
  font-size: 14px;
  font-weight: 500;
  font-family: sans-serif;
}
</style>