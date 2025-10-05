<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-columns">
        <div class="footer-column">
          <h4>О нас</h4>
          <ul class="footer-links">
            <li v-for="link in aboutLinks" :key="link">{{ link }}</li>
          </ul>
        </div>
        
        <div class="footer-column">
          <div class="business-section">
            <h4>Checkin для бизнеса</h4>
            <ul class="footer-links">
              <li v-for="link in businessLinks" :key="link">{{ link }}</li>
            </ul>
          </div>
        </div>

        <div class="footer-column">
          <h4>Discover</h4>
          <ul class="footer-links">
            <li v-for="link in discoverLinks" :key="link">{{ link }}</li>
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
              <img src="../assets/gray-logo.png" class="footer-logo" alt="Checkin">
              <div class="copyright">
                Copyright © 2024 Checkin Inc. and related marks are registered trademarks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'
import Button from 'primevue/button'

export default {
  name: 'AppFooter',
  components: {
    Button
  },
  setup() {
    const selectedLanguage = ref('RU')
    const selectedCountry = ref('Казахстан')
    const footerLanguageDropdownOpen = ref(false)
    const countryDropdownOpen = ref(false)

    const languages = ref(['RU', 'ENG', 'KAZ'])
    const countries = ref(['Казахстан', 'Россия'])

    const aboutLinks = ref([
      'O Checkin',
      'Для прессы',
      'Работа у нас',
      'Реклама на Checkin',
      'Инвестиционные предложения',
      'Правила использования',
      'Политика конфиденциальности',
      'Правила размещения контента'
    ])

    const businessLinks = ref([
      'Checkin для вашего бизнеса',
      'Вход в бизнес аккаунт',
      'Права бизнес аккаунта',
      'Реклама на Checkin',
      'Checkin для вашего ресторана',
      'Управление столиками',
      'Поддержка для бизнес аккаунта'
    ])

    const discoverLinks = ref([
      'Политика цен',
      'Collections',
      'Talk',
      'Events',
      'Checkin Blog',
      'Support',
      'Checkin Mobile'
    ])

    const toggleFooterLanguageDropdown = () => {
      footerLanguageDropdownOpen.value = !footerLanguageDropdownOpen.value
      countryDropdownOpen.value = false
    }
    
    const selectLanguage = (language) => {
      selectedLanguage.value = language
      footerLanguageDropdownOpen.value = false
    }

    const toggleCountryDropdown = () => {
      countryDropdownOpen.value = !countryDropdownOpen.value
      footerLanguageDropdownOpen.value = false
    }
    
    const selectCountry = (country) => {
      selectedCountry.value = country
      countryDropdownOpen.value = false
    }

    return {
      selectedLanguage,
      selectedCountry,
      footerLanguageDropdownOpen,
      countryDropdownOpen,
      languages,
      countries,
      aboutLinks,
      businessLinks,
      discoverLinks,
      toggleFooterLanguageDropdown,
      selectLanguage,
      toggleCountryDropdown,
      selectCountry
    }
  }
}
</script>

<style scoped>
.footer {
  background: rgba(187, 187, 187, 0.394);
  border-top: 1px solid #e5e5e5;
  padding: 2rem 0 1rem;
  margin-top: 140px;
  font-family: sans-serif;
}

.footer-content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-columns {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
    text-align: left;
}

.footer-column {
  flex: 3;
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
  align-items: flex-start;

}

.footer-links li {
  margin-bottom: 0.4rem;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-links li:hover {
  color: #333;
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

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  object-fit: cover;
  width: 140px;
  margin-bottom: 10px;
}

.copyright {
  color: #999;
  font-size: 0.8rem;
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
</style>