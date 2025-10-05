```html
<template>
  <div class="main-layout">
    <AppHeader/>
    
    <div class="content-wrapper">
      <div class="left-column">
        <div class="main-content">
          <div class="main-page">
            <span class="head-text">Главная / Алматы / Красота, спа и массаж / <span class="head-text2"> Мужские барбер шопы</span></span>
          </div>

          <div class="slider-container">
            <div class="background-image">
              <img 
                :src="currentImage.src" 
                :alt="currentImage.alt"
                class="bg-image"
              />
            </div>
            
            <div class="bottom-slider">
              <Button 
                icon="pi pi-arrow-left" 
                class="p-button-text p-button-secondary nav-button prev"
                @click="prevImage"
              />
              
              <div class="slider-track-container">
                <div class="slider-track" :style="trackStyle">
                  <div 
                    v-for="(image, index) in images" 
                    :key="index"
                    class="slider-item"
                    :class="{ 'active': currentIndex === index }"
                    @click="setCurrentImage(index)"
                  >
                    <img 
                      :src="image.src" 
                      :alt="image.alt"
                      class="slider-thumbnail"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                icon="pi pi-arrow-right" 
                class="p-button-text p-button-secondary nav-button next"
                @click="nextImage"
              />
            </div>
          </div>

          <div class="about-business-section">
            <div class="about-container">
              <hr>
              <div class="markdown-content">
                <h1>About the business</h1>
                <p>Fox & Jane is 100% locally and diversity owned. Specializing in dimensional colors, curated cuts for all lengths and textures, the most innovative hair transformations, and beyond. At Fox & Jane, we understand the importance of creating incredible results and even better experience.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
              </div>
              <hr>
            </div>
          </div>

          <div class="reviews-section">
            <div class="reviews-container">
              <h2 class="reviews-title">Overall rating & reviews</h2>
              
              <div class="rating-overview">
                <div class="rating-main">
                  <div class="rating-score">4.5</div>
                  <div class="rating-count">25 отзывов</div>
                </div>
                
                <div class="rating-stars">
                  <div class="star-row">
                    <div class="stars">★★★★★</div>
                    <div class="rating-bar">
                      <div class="bar-fill" style="width: 100%"></div>
                    </div>
                    <span class="rating-number">10</span>
                  </div>
                  <div class="star-row">
                    <div class="stars">★★★★★</div>
                    <div class="rating-bar">
                      <div class="bar-fill" style="width: 10%"></div>
                    </div>
                    <span class="rating-number">1</span>
                  </div>
                  <div class="star-row">
                    <div class="stars">★★★★★</div>
                    <div class="rating-bar">
                      <div class="bar-fill" style="width: 0%"></div>
                    </div>
                    <span class="rating-number">0</span>
                  </div>
                  <div class="star-row">
                    <div class="stars">★★★★★</div>
                    <div class="rating-bar">
                      <div class="bar-fill" style="width: 0%"></div>
                    </div>
                    <span class="rating-number">0</span>
                  </div>
                  <div class="star-row">
                    <div class="stars">★★★★★</div>
                    <div class="rating-bar">
                      <div class="bar-fill" style="width: 0%"></div>
                    </div>
                    <span class="rating-number">0</span>
                  </div>
                </div>
              </div>
              
              <div class="reviews-filters">
                <button class="filter-button">Сначала с высоким рейтингом</button>
                <button class="filter-button">За последний год</button>
                <div class="search-container">
                  <input type="text" placeholder="Я ищу..." class="search-input-filter" />
                  <i class="pi pi-search search-icon"></i>
                </div>
              </div>

              <div class="reviews-list">
                <div class="review-item">
                  <div class="review-header">
                    <div class="reviewer-avatar">
                      <img src="../assets/ava1.png" alt="Ереаинов Максат" class="avatar" />
                    </div>
                    <div class="reviewer-info">
                      <div class="review-meta">
                        <div class="review-stars-text">★★★★★</div>
                        <div class="review-date">Сегодня в 21:05</div>
                      </div>
                      <div class="reviewer-name">Ереаинов Максат Кайратулы</div>
                    </div>
                  </div>
                  <div class="review-content">
                    <p>OMG! I love this place so much! I go to Shaeena or Melissa and I love them both! Everyone is so nice at this location. I only go to Tribeca but I would assume that the company culture creates the same environment in all the locations. I have very stubborn grays and this is the first time in 15 years that I haven't had an issue with coverage. The Limitless Pro+ membership makes it affordable for those of us that need to go every 4 weeks. I highly recommend Madison Reed.</p>
                  </div>
                  <div class="review-actions">
                    <Button icon="pi pi-thumbs-up" class="p-button-text p-button-secondary" />
                    <Button icon="pi pi-thumbs-down" class="p-button-text p-button-secondary" />
                  </div>
                </div>

                <div class="business-response">
                  <div class="response-header">
                    <div class="responder-avatar">
                      <img src="../assets/ava2.png" alt="Зубенко Михаил" class="avatar" />
                    </div>
                    <div class="responder-info">
                      <div class="response-date">Сегодня в 21:05</div>
                      <div class="responder-name">Зубенко Михаил Петрович</div>
                    </div>
                  </div>
                  <div class="response-content">
                    <p>Уважаемый клиент, приносим извинения за любые неудобства, которые вы испытали. Мы ценим ваш отзыв и стремимся к улучшению качества обслуживания. Пожалуйста, дайте нам еще один шанс исправить ситуацию. Будем рады видеть вас снова в нашем барбершопе.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-column">
        <div class="booking-card">
          <div class="shop-header">
            <img src="../assets/hunter.logo.png" alt="logo" class="shop-logo" />
            <div class="shop-info">
              <h1>Hunter barbershop <img src="../assets/check.png" width="20px" /> </h1>
              <p class="subtitle"> Барбер шоп <span class="open">Открыто <span style="color: black;">до 22:00</span></span></p>
              <hr>
              <div class="rating">
                <span class="price1">Цена: $$$</span>
                <span class="stars">★★★★★</span>
                <span class="reviews">4.5 (25 отзывов)</span>
              </div>
            </div>
            <Button icon="pi pi-heart" class="p-button-text p-button-danger fav" />
          </div>
          <hr>

          <div class="card-section">
            <h2>Адреса и контакты</h2>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="pi pi-map-marker"></i>
              </div>
              <span>ул. Бальзака 8, лит Б, ЖК "Солнечный квартал"</span>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="pi pi-phone"></i>
              </div>
              <span>+7 (747) 255-45-30</span>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="pi pi-globe"></i>
              </div>
              <span>hunterbarbershop.kz</span>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="pi pi-whatsapp"></i>
              </div>
              <span class="contact-link">Написать в Whatsapp</span>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">
                <i class="pi pi-instagram"></i>
              </div>
              <span class="contact-link">Instagram</span>
            </div>
          </div>
        </div>

        <div class="booking-card">
          <div class="back-link" @click="$router.back()">
            <i class="pi pi-arrow-left"></i> Назад
          </div>
          <h2>Hunter Barbershop Солнечный квартал</h2>
          <p class="small">ул. Бальзака 8, лит Б, ЖК "Солнечный квартал"</p>
          <hr>
          <div class="p-8 bg-white">
            <h2 class="text-3xl font-bold text-gray-800 mb-8">Детали записи:</h2>

            <div class="flex justify-between items-center mb-8">
              <div class="flex items-center gap-4">
               <img src="../assets/ava3.png" width="70px" height="70px" alt="">
                <div>
                  <p class="text-m">Топ-мастер</p>
                  <h3 class="text-n">Василий Иванов</h3>
                  <div class="flex items-center mt-2">
                    <div class="star flex gap-1">
                      <i v-for="n in 5" :key="n" class=" pi pi-star-fill text-yellow-400 text-xl"></i>
                    </div>
                    <span class="text-star text-gray-500 text-lg ml-2">2 отзыва</span>
                  </div>
                </div>
              </div>
              <Button icon="pi pi-pencil" class=" p-button-text border " style="width: 50px; height: 50px;"/>
            </div>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
                  <i class="date pi pi-calendar"></i>
                </div>
                <div class="time">
                  <h3 class="text-time text-2xl font-bold text-gray-600 leading-tight">21:30 - 22:30</h3>
                  <p class="text-p text-gray-500 text-lg mt-1">Воскресенье, 11 Марта</p>
                </div>
              </div>
              <Button icon="pi pi-pencil" class=" p-button-text " style="width: 50px; height: 50px;"/>
            </div>
          </div>
        </div>

        <div class="booking-card">
          <h2>Услуги:</h2>

          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-select-item"
            @click="toggleService(service)"
          >
            <div class="service-text">
              <span class="service-name">{{ service.name }}</span>
              <span class="service-price">{{ service.price.toLocaleString('ru-RU') }} ₸</span>
            </div>

            <div 
              class="service-check"
              :class="{ 'checked': service.selected }"
            >
              <i v-if="service.selected" class="pi pi-check"></i>
            </div>
          </div>

          <p class="selected-count">
            <span>Выбрана {{ selectedServicesCount }} услуга</span>
            <span class="price">{{ totalPrice }} ₸</span>
          </p>

          <h2>Ваши данные:</h2>
          <div class="field">
            <label>Имя*</label>
            <InputText type="text" v-model="formData.name" placeholder="name" />
          </div>
          <div class="field">
            <label>Телефон*</label>
            <InputMask 
              v-model="formData.phone" 
              mask="+7 (999) 999-99-99" 
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div class="field">
            <label>Комментарий</label>
            <Textarea v-model="formData.comment" placeholder="Напишите комментарий" rows="3" />
          </div>

          <div class="agreement">
            <Checkbox v-model="formData.agree" :binary="true" />
            <span>Я принимаю условия  <span style="color: #2CA3E8;">Пользовательского соглашения </span>Политики конфиденциальности и даю согласие на Обработку персональных данных. </span>
          </div>

          <Button label="Записаться" class="submit-button"/>
          <div class="footer">
            <img src="../assets/Checkin.png" alt="Checkin" width="170">
            <p>Powered by</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';

const router = useRouter();

interface SliderImage {
  src: string;
  alt: string;
}

interface Service {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}

const images = ref<SliderImage[]>([
  { src: './images/hunter1.png', alt: 'Hunter' },
  { src: './images/hunter2.png', alt: 'Hunter' },
  { src: './images/hunter3.png', alt: 'Hunter' },
  { src: './images/hunter4.png', alt: 'Hunter' },
  { src: './images/hunter5.png', alt: 'Hunter' },
  { src: './images/hunter6.png', alt: 'Hunter' },
]);

const currentIndex = ref(0);
const trackOffset = ref(0);

const services = ref<Service[]>([
  { id: '1', name: 'Стрижка мужская', price: 12000, selected: true },
  { id: '2', name: 'Укладка', price: 2000, selected: false }
]);

const formData = ref({
  name: '',
  phone: '',
  comment: '',
  agree: false
});

const currentImage = computed(() => images.value[currentIndex.value]);

const trackStyle = computed(() => ({
  transform: `translateX(${trackOffset.value}px)`
}));

const selectedServicesCount = computed(() => {
  return services.value.filter(service => service.selected).length;
});

const totalPrice = computed(() => {
  return services.value
    .filter(service => service.selected)
    .reduce((total, service) => total + service.price, 0);
});

const setCurrentImage = (index: number) => {
  currentIndex.value = index;
  updateTrackPosition();
};

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
  updateTrackPosition();
};

const prevImage = () => {
  currentIndex.value = currentIndex.value === 0 
    ? images.value.length - 1 
    : currentIndex.value - 1;
  updateTrackPosition();
};

const updateTrackPosition = () => {
  const itemWidth = 110;
  const containerWidth = 500;
  const maxOffset = Math.max(0, (images.value.length * itemWidth) - containerWidth);
  
  let targetOffset = currentIndex.value * itemWidth - (containerWidth / 2) + (itemWidth / 2);
  targetOffset = Math.max(0, Math.min(maxOffset, targetOffset));
  
  trackOffset.value = -targetOffset;
};

const toggleService = (service: Service) => {
  service.selected = !service.selected;
};

onMounted(() => {
  updateTrackPosition();
});
</script>

<style scoped>
.p-button-text{
  border: 1px solid gray;
  color: gray;
}
.text-m{
  margin-top: 10px;
  margin-left: 20px;
}
.text-n{
  margin-top: -13px;
  margin-left: 20px;
}
.pi-star-fill{
  color: gold;
  font-size: 12px;
}
.star{
  margin-left: 20px;
  margin-top: -22px;
}
.text-star{
  font-size: 12px;
  margin-left: 20px;
  margin-top: -22px;
}
.date{
  background-color: rgba(183, 183, 183, 0.428);
  padding: 20px;
  border-radius: 35px;
  font-size: 30px;
}
.time{
 margin-left: 23px; 
}
.text-p{
  margin-top: -10px;
}
*{
  font-family: sans-serif;
}

.content-wrapper {
  display: flex;
  max-width: 100%;
  margin-top: 0;
  align-items: flex-start;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
}

.right-column {
  width: 420px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  margin-top: 60px;
  margin-right: 90px;
}

.booking-card {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;
  padding: 20px;
  margin-left: -200px;
}

.shop-header {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.shop-logo {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  flex-shrink: 0;
}

.shop-info {
  flex: 1;
}

.shop-info h1 {
  font-size: 23px;
  letter-spacing: 1px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 8px;
}

.verified {
  color: #10b981;
  font-size: 16px;
}

.subtitle {
  font-size: 14px;
  color: #5c5f5e;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.open {
  color: #34931e;
  font-weight: 500;
}

.shop-info hr {
  margin: 12px 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}

.rating {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #6b7280;
  flex-wrap: wrap;
  margin-top: 5px;
}

.price {
   color: #454545;
   font-family: sans-serif;
   background-color: rgb(255, 255, 255);
   padding: 5px;
}

.stars {
  color: #f59e0b;
}

.reviews {
  color: #6b7280;
}

.fav {
  font-size: 20px;
  color: #d1d5db;
  cursor: pointer;
  background-color: rgb(189, 189, 189);
  padding: 4px;
  border-radius: 30px;
  transition: color 0.2s ease;
}

.fav:hover {
  color: #ef4444;
}

.booking-card > hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid #e5e7eb;
}

.card-section h2 {
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #111827;
  margin-top: 10px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  flex-shrink: 0;
}

.contact-icon i {
  font-size: 16px;
}

.contact-item span {
  font-size: 14px;
  color: #374151;
  line-height: 1.4;
}

.contact-link {
  color: #2563eb;
  cursor: pointer;
}

.contact-link:hover {
  text-decoration: underline;
}

.back-link {
  font-size: 18px;
  color: #374151;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.small {
  font-size: 15px;
  color: #6b7280;
  margin-top: -5px;
}

.service-select-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f3f4f6;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.service-select-item:hover {
  background: #e5e7eb;
}

.service-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.service-name {
  font-size: 15px;
  color: #111827;
  font-weight: 500;
}

.service-price {
  font-size: 14px;
  color: #0284c7;
  font-weight: 600;
}

.service-check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: white;
  transition: all 0.2s ease;
}

.service-check.checked {
  background: #38bdf8;
  border-color: #38bdf8;
  color: #fff;
}

.service-check i {
  font-size: 14px;
}

.selected-count {
  font-size: 14px;
  color: #6b7280;
  margin: 16px 0;
  border-top: 1px solid rgba(128, 128, 128, 0.165);
  border-bottom: 1px solid rgba(128, 128, 128, 0.252);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price1 {
  font-weight: 500;
  color: #333;
  background-color: rgba(182, 182, 182, 0.402);
  padding: 5px;
  border-radius: 3px;
}

.field {
  margin-bottom: 12px;
}

.field label {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
  font-weight: 500;
}

:deep(.p-inputtext) {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
}

:deep(.p-inputtext:focus) {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}

:deep(.p-inputmask) {
  width: 100%;
}

:deep(.p-textarea) {
  width: 100%;
  resize: vertical;
}

:deep(.p-checkbox .p-checkbox-box) {
  border: 2px solid #ced4da;
  border-radius: 4px;
}

:deep(.p-checkbox .p-checkbox-box.p-highlight) {
  background: #007bff;
  border-color: #007bff;
}

.agreement {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  width: 420px;
  justify-content: center;
}

:deep(.submit-button.p-button) {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  background: #2CA3E8;
  border-color:#2CA3E8;
}
:deep(.submit-button.p-button):hover{
  background-color: #007bff;
}

.footer {
  text-align: center;
  font-size: 13px;
  color: #6b7280;
  margin-top: 20px;
  padding-top: 20px;
}

.main-page {
  margin-top: 45px;
  margin-left: 140px;
}

.head-text {
  color: gray;
}

.head-text2 {
  color: black;
}

.slider-container {
  position: relative;
  max-width: 800px;
  height: 550px;
  margin: 20px auto;
  border-radius: 7px;
  margin-left: 135px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom-slider {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 7px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 2;
}

.slider-track-container {
  flex: 1;
  height: 100%;
  overflow: hidden;
  margin: 0 10px;
}

.slider-track {
  display: flex;
  gap: 10px;
  height: 100%;
  align-items: center;
  transition: transform 0.4s ease;
  padding: 0 10px;
}

.slider-item {
  flex: 0 0 110px;
  height: 75px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.1);
}

.slider-item.active {
  border-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
}

.slider-item:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.15);
}

.slider-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

:deep(.nav-button.p-button) {
  width: 35px;
  height: 40px;
  background: rgba(255, 255, 255, 0.416);
  border: none;
  border-radius: 8px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}

:deep(.nav-button.p-button:hover) {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

:deep(.nav-button.p-button:active) {
  transform: scale(0.95);
}

.about-business-section {
  margin-top: 60px;
  margin-left: 135px;
  margin-right: auto;
  max-width: 800px;
}

.about-container {
  width: 100%;
}

.markdown-content {
  max-width: 100%;
}

.markdown-content h1 {
  font-size: 29px;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
}

.markdown-content p {
  font-size: 13px;
  line-height: 1.7;
  color: grey;
  margin-bottom: 20px;
}

.reviews-section {
  margin-top: 40px;
  margin-left: 135px;
  margin-right: auto;
  max-width: 800px;
}

.reviews-container {
  width: 100%;
}

.reviews-title {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #000;
  margin-bottom: 30px;
}

.rating-overview {
  display: flex;
  gap: 50px;
  margin-bottom: 40px;
}

.rating-main {
  text-align: center;
}

.rating-score {
  font-size: 42px;
  font-weight: 400;
  color: #000;
  line-height: 1;
}

.rating-count {
  font-size: 10px;
  color: #666;
  margin-top: 5px;
}

.rating-stars {
  flex: 1;
}

.star-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  width: 80%;
}

.stars {
  color: #ffc107;
  font-size: 14px;
  width: 70px;
}

.rating-bar {
  flex: 1;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background-color: #ffc107;
  border-radius: 4px;
}

.rating-number {
  font-size: 14px;
  color: #666;
  width: 20px;
  text-align: right;
}

.reviews-filters {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.filter-button {
  min-width: 100px;
  padding: 10px 10px;
  border: 1px solid #d1d5db;
  border-radius: 30px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button:hover {
  background: #f8f9fa;
  border-color: #9ca3af;
}

.search-container {
  position: relative;
  display: inline-block;
}

.search-input-filter {
  min-width: 270px;
  padding: 10px 35px 10px 15px;
  border: 1px solid #d1d5db;
  border-radius: 20px;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.reviews-list {
  margin-top: 20px;
}

.review-item {
  padding: 25px 0;
}

.review-item:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 12px;
}

.reviewer-avatar {
  flex-shrink: 0;
}
.avatar{
  width: 50px;
  height: 50px;
}

.reviewer-info {
  flex: 1;
}

.review-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.review-stars-text {
  color: #ffc107;
  font-size: 16px;
}

.review-date {
  font-size: 14px;
  color: #666;
}

.reviewer-name {
  font-weight: 600;
  font-size: 16px;
  color: #000;
}

.review-content {
  margin-bottom: 15px;
}

.review-content p {
  font-size: 14px;
  line-height: 1.2;
  color: #333;
  margin: 0;
  width: 690px;
}

.review-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

:deep(.review-actions .p-button) {
  padding: 8px 12px;
}

.business-response {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-top: 10px;
  width: 690px;
}

.response-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 12px;
}

.responder-avatar {
  flex-shrink: 0;
}

.responder-info {
  flex: 1;
}

.responder-name {
  font-weight: 600;
  font-size: 15px;
  color: #2f2f2f;
  margin-bottom: 4px;
}

.response-date {
  font-size: 13px;
  color: #666;
  margin-bottom: 5px;
}

.response-content p {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  border-left: 2px solid gray;
  padding-left: 10px;
  width: 690px;
}
</style>