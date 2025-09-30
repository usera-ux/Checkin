<template>
  <div class="main-screen">
    <header class="header">
        
      <div class="header-container">
        <div class="logo-section">
          <img src="./assets/logo.png" alt="Checkin" class="logo" />
        </div>

        <div class="nav-section">
  <Button 
    icon="pi pi-bars" 
    label="Разделы" 
    class="sections-btn1 p-button-outlined p-button-secondary"
    style="padding: 10px;"
    @click="goToSections"

  />
    <router-view/>

          <div class="search-section">
            <InputText 
              placeholder="Я ищу..." 
              class="search-input"
            />
            <div class="divider"></div>
            <div class="location">
              <span>Алма-aта</span>
              <i class="pi pi-search"></i>
            </div>
          </div>

          <Button 
            label="Для вашего бизнеса" 
            icon="pi pi-chevron-down"
            iconPos="right" 
            class="business-btn p-button-secondary"
          />
          <div class="divider"></div>

       
          <div class="dropdown-container">
            <Button 
              :label="selectedLanguage"
              :icon="languageDropdownOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
              iconPos="right" 
              class="language-btn p-button-secondary"
              @click="toggleLanguageDropdown"
            />
            <div v-if="languageDropdownOpen" class="dropdown-menu">
              <div 
                v-for="language in languages" 
                :key="language"
                class="dropdown-item"
                :class="{ 'selected': selectedLanguage === language }"
                @click="selectLanguage(language)"
              >
                {{ language }}
              </div>
            </div>
          </div>
          <div class="divider"></div>

          <div class="auth-buttons">
            <Button label="Войти" class="login-btn p-button-outlined p-button-secondary" @click="showAuthModal = true" />
            <Button label="Регистрация" class="register-btn p-button-info" @click="showAuthModal = true" />
          </div>
        </div>
      </div>
    </header>

    <main class="hero-section">
      <div class="background-image">
        <img src="./assets/mainimage.png" alt="Beauty Salon" class="bg-img" />
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
                    <img src="./assets/beauty.png" alt="Красота, SPA, Массаж" />
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
                    <img src="./assets/tutor.png" alt="Репетиторы" />
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
                    <img src="./assets/nurse.png" alt="Психотерапевты" />
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
                    <img src="./assets/tutor.png" alt="Тренинги и курсы" />
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
                    <img src="./assets/cto.png" alt="Авто мастерские" />
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
                    <img src="./assets/car.png" alt="Автомойки" />
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
                    <img src="./assets/workout.png" alt="Workout зоны" />
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
                    <img src="./assets/medicine.png" alt="Медицинские центры" />
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

  
    <div v-if="showAuthModal" class="auth-modal-overlay" @click="showAuthModal = false">
      <div class="auth-modal-content" @click.stop>
        <div class="auth-modal-container">
          <div class="auth-form-side">
            <div class="auth-form-content">
              <h1 class="auth-title">Войти в аккаунт</h1>
              <p class="auth-subtitle">
                Укажите ваш номер телефона или воспользуйтесь другими методами авторизации в аккаунт
              </p>

              <div class="form-section">
                <label class="section-label">Номер телефона</label>
                <div class="phone-input-container">
                  <span class="phone-prefix">+7 (</span>
                  <input 
                    type="text" 
                    class="phone-input" 
                    placeholder="___"
                    maxlength="3"
                    v-model="phonePart1"
                  />
                  <span class="phone-separator">) </span>
                  <input 
                    type="text" 
                    class="phone-input" 
                    placeholder="______"
                    maxlength="6"
                    v-model="phonePart2"
                  />
                </div>
              </div>

              <Button 
                label="Получить код авторизации" 
                class="get-code-btn p-button-info"
                @click="getAuthCode"
              />

              <div class="code-input-section" v-if="showCodeInput">
                <label class="section-label">Код авторизации</label>
                <InputText 
                  type="text" 
                  placeholder="______" 
                  class="code-input"
                  v-model="authCode"
                />
              </div>

              <div class="other-methods-section">
                <div class="methods-divider">
                  <span class="divider-text">Другие способы</span>
                </div>

                <div class="social-buttons">
                  <Button 
                    label="Sign in with Google" 
                    class="social-btn google-btn p-button-outlined"
                  />
                  <Button 
                    label="SIGN IN WITH APPLE" 
                    class="social-btn apple-btn p-button-outlined"
                  />
                </div>
              </div>

              <div class="auth-footer">
                <span class="no-account">Нет аккаунта? </span>
                <button class="register-link">Зарегистрируйтесь</button>
              </div>
            </div>
          </div>

         
          <div class="auth-image-side">
            <img src="./assets/welcome.png" alt="Welcome" class="auth-image" />
          </div>

          <button class="close-btn" @click="showAuthModal = false">×</button>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-columns">
          <div class="footer-column">
            <h4>О нас</h4>
            <ul class="footer-links">
                <li>O Checkin</li>
                <li>Для прессы </li>
                <li>Работа у нас</li>
                <li>Реклама на Checkin</li>
                <li>Инвестиционные предложения</li>
                <li>Правила использования</li>
                <li>Политика конфиденциальности</li>
                <li>Правила размещения контента</li>
              </ul>
            </div>
          
          <div class="footer-column">
            <div class="business-section">
              <h4>Checkin для бизнеса</h4>
              <ul class="footer-links">
                <li>Checkin для вашего бизнеса</li>
                <li>Вход в бизнес аккаунт</li>
                <li>Права бизнес аккаунта</li>
                <li>Реклама на Checkin</li>
                <li>Checkin для вашего ресторана</li>
                <li>Управление столиками</li>
                <li>Поддержка для бизнес аккаунта</li>
              </ul>
            </div>
          </div>

          
          <div class="footer-column">
            <h4>Discover</h4>
            <ul class="footer-links">
              <li>Политика цен</li>
              <li>Collections</li>
              <li>Talk</li>
              <li>Events</li>
              <li>Checkin Blog</li>
              <li>Support</li>
              <li>Checkin Mobile</li>
            </ul>
          </div>

          
          <div class="footer-column">
            <div class="selectors-section">
              <div class="selector-item-language">
                <span class="selector-label">Язык:</span>
                <span class="selector-label">Страна:</span>
              </div>
              
              <div class="selector-item">
                <div class="dropdown-container">
                  <Button 
                    :label="selectedLanguage"
                    :icon="footerLanguageDropdownOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
                    iconPos="right"
                    class="selector-btn p-button-text"
                    @click="toggleFooterLanguageDropdown"
                  />
                  <div v-if="footerLanguageDropdownOpen" class="dropdown-menu footer-dropdown">
                    <div 
                      v-for="language in languages" 
                      :key="language"
                      class="dropdown-item"
                      :class="{ 'selected': selectedLanguage === language }"
                      @click="selectLanguage(language)"
                    >
                      {{ language }}
                    </div>
                  </div>
                </div>
                <div class="dropdown-container">
                  <Button 
                    :label="selectedCountry"
                    :icon="countryDropdownOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
                    iconPos="right"
                    class="selector-btn p-button-text"
                    @click="toggleCountryDropdown"
                  />
                  <div v-if="countryDropdownOpen" class="dropdown-menu footer-dropdown">
                    <div 
                      v-for="country in countries" 
                      :key="country"
                      class="dropdown-item"
                      :class="{ 'selected': selectedCountry === country }"
                      @click="selectCountry(country)"
                    >
                      {{ country }}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="footer-brand">
                <img src="./assets/gray-logo.png" class="footer-logo" alt="">
                <div class="copyright">
                  Copyright © 2024 Checkin Inc. and related marks are registered trademarks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

export default defineComponent({
  name: 'MainScreen',
  components: {
    Button,
    InputText,
    Card
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
      
      selectedLanguage: 'RU',
      selectedCountry: 'Казахстан',
      languageDropdownOpen: false,
      footerLanguageDropdownOpen: false,
      countryDropdownOpen: false,
      
      languages: ['RU', 'ENG', 'KAZ'],
      countries: ['Казахстан', 'Россия'],
      
      showAuthModal: false,
      phonePart1: '',
      phonePart2: '',
      authCode: '',
      showCodeInput: false,
    }
  },
  methods: {
    goToSections() {
  this.$router.push('/sections');
},
    setActivePart(partNumber) {
      this.activePart = partNumber;
      this.$nextTick(() => {
        const categoriesSection = document.querySelector('.categories-section');
        if (categoriesSection) {
          categoriesSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
    toggleLanguageDropdown() {
      this.languageDropdownOpen = !this.languageDropdownOpen;
      this.footerLanguageDropdownOpen = false;
      this.countryDropdownOpen = false;
    },
    
    toggleFooterLanguageDropdown() {
      this.footerLanguageDropdownOpen = !this.footerLanguageDropdownOpen;
      this.languageDropdownOpen = false;
      this.countryDropdownOpen = false;
    },
    
    selectLanguage(language) {
      this.selectedLanguage = language;
      this.closeAllDropdowns();
    },
    toggleCountryDropdown() {
      this.countryDropdownOpen = !this.countryDropdownOpen;
      this.languageDropdownOpen = false;
      this.footerLanguageDropdownOpen = false;
    },
    
    selectCountry(country) {
      this.selectedCountry = country;
      this.closeAllDropdowns();
    },
    closeAllDropdowns() {
      this.languageDropdownOpen = false;
      this.footerLanguageDropdownOpen = false;
      this.countryDropdownOpen = false;
    },
    getAuthCode() {
      this.showCodeInput = true;
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown-container')) {
        this.closeAllDropdowns();
      }
    });
  }
});

</script>

<style scoped>
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.auth-modal-content {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  width: 1000px;
  height: 650px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.auth-modal-container {
  display: flex;
  height: 100%;
  position: relative;
}

.auth-form-side {
  flex: 1;
  padding: 60px 50px;
  display: flex;
  align-items: center;
}

.auth-form-content {
  width: 100%;
  max-width: 400px;
}

.auth-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  font-family: sans-serif;
}

.auth-subtitle {
  color: #666;
  margin-bottom: 40px;
  line-height: 1.5;
  font-size: 1rem;
  font-family: sans-serif;
}

.form-section {
  margin-bottom: 25px;
}

.section-label {
  display: block;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1rem;
  font-family: sans-serif;
}

.phone-input-container {
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  background: white;
  font-size: 1.1rem;
}

.phone-prefix, .phone-separator {
  color: #333;
  font-weight: 500;
  font-family: sans-serif;
}

.phone-input {
  border: none;
  outline: none;
  text-align: center;
  font-size: 1.1rem;
  margin: 0 5px;
  font-family: sans-serif;
  background: transparent;
  width: 50px;
}

.phone-input::placeholder {
  color: #ccc;
}

:deep(.get-code-btn.p-button) {
  width: 100%;
  padding: 15px;
  background: #199ee5;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 30px;
  font-family: sans-serif;
}

.code-input-section {
  margin-bottom: 30px;
}

:deep(.code-input.p-inputtext) {
  width: 100%;
  padding: 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1.1rem;
  font-family: sans-serif;
}

.other-methods-section {
  margin-bottom: 30px;
}

.methods-divider {
  position: relative;
  text-align: center;
  margin: 30px 0;
}

.methods-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e0e0e0;
}

.divider-text {
  background: white;
  padding: 0 20px;
  color: #666;
  font-size: 1rem;
  font-family: sans-serif;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

:deep(.social-btn.p-button) {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  font-family: sans-serif;
}

:deep(.google-btn.p-button) {
  border: 2px solid #e0e0e0;
  color: #333;
}

:deep(.apple-btn.p-button) {
  border: 2px solid #333;
  color: #333;
  background: #333;
  color: white;
}

.auth-footer {
  text-align: center;
  margin-top: 30px;
}

.no-account {
  color: #666;
  font-size: 1rem;
  font-family: sans-serif;
}

.register-link {
  background: none;
  border: none;
  color: #199ee5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: sans-serif;
}

.register-link:hover {
  text-decoration: underline;
}

.auth-image-side {
  flex: 1;
  position: relative;
  background: #f8f9fa;
}

.auth-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 60px;
  left: 50px;
  color: white;
}

.welcome-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: sans-serif;
}

.welcome-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  font-family: sans-serif;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #666;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.close-btn:hover {
  background: #f5f5f5;
}
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 4px;
  min-width: 150px;
}

.footer-dropdown {
  min-width: 140px;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s ease;
  font-size: 0.9rem;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item.selected {
  background-color: #e3f2fd;
  color: #1976d2;
  font-weight: 600;
}
.nav-section .dropdown-container {
  margin: 0;
}

.selector-item .dropdown-container {
  flex: 1;
}

*{
  font-family: sans-serif;
}
.header {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;
  background: white;
  position: relative;
  z-index: 1000;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.logo {
  height: 40px;
  margin-left: -50px;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  margin-left: 80px;
}

.search-section {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  margin-right: auto;
}

.location i {
  margin-left: 40px;
}

:deep(.search-section .p-inputtext) {
  border: none;
  width: 160px;
  padding: 0.75rem 1rem;
}

:deep(.search-section .p-inputtext:focus) {
  box-shadow: none;
}

.divider {
  width: 1px;
  height: 24px;
  background: #e0e0e0;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #666;
  font-size: 0.875rem;
  min-width: 150px;
}

:deep(.sections-btn.p-button) {
  gap: 0.5rem;
  margin-right: 1.25rem;
  padding: 15px;
  font-size: 17px;
  font-family: serif;
}
:deep(.sections-btn1.p-button:hover) {
    border: 2px solid #65b7e3 !important;
}


:deep(.business-btn.p-button) {
  min-width: 160px;
}

:deep(.language-btn.p-button) {
  min-width: 80px;
}

.auth-buttons {
  display: flex;
  gap: 2rem;
  margin-left: 20px;
}

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
  background: #f8f9fa;
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
.footer {
  background: white;
  border-top: 1px solid #e5e5e5;
  padding: 2rem 0 1rem;
  margin-top: 2rem;
  font-family: sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-columns {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-column {
  flex: 1;
}

.footer-column h4 {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #333;
}
.business-section h5 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #666;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.4rem;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.selectors-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 20px;
}

.selector-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.selector-item-language {
  display: flex;
  gap: 7rem;
  margin-left: 3px;
}

.selector-label {
  font-weight: 600;
  color: #333;
  min-width: 60px;
  font-size: 1rem;
}
:deep(.selector-btn.p-button) {
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  background: white;
  color: #333;
  font-size: 0.9rem;
  min-width: 150px;
  justify-content: space-between;
}

:deep(.selector-btn.p-button:hover) {
  background: #f5f5f5;
  border-color: #ccc;
}

:deep(.selector-btn.p-button .p-button-icon) {
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem 0;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.checkin-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.copyright {
  color: #999;
  font-size: 0.8rem;
}

.footer-logo {
  object-fit: cover;
  width: 140px;
  margin-bottom: 10px;
}
</style>