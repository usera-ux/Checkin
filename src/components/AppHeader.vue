<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-section">
        <img src="../assets/logo.png" alt="Checkin" class="logo" />
      </div>

      <div class="nav-section">
        <Button 
          icon="pi pi-bars" 
          label="Разделы" 
          class="sections-btn1 p-button-outlined p-button-secondary"
        />

        <div class="search-section">
          <InputText 
            placeholder="Я ищу..." 
            class="search-input"
          />
          <div class="divider"></div>
          <div class="location">
            <span>Алма-ата</span>
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
            label="RU"
            icon="pi pi-chevron-down"
            iconPos="right" 
            class="language-btn p-button-secondary"
          />
        </div>
        <div class="divider"></div>

        <div class="auth-buttons">
          <Button 
            label="Войти" 
            class="login-btn p-button-outlined p-button-secondary" 
            @click="showAuthModal = true" 
          />
          <Button 
            label="Регистрация" 
            class="register-btn p-button-info" 
            @click="showAuthModal = true" 
          />
        </div>
      </div>
    </div>

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
                  <InputText 
                    type="text" 
                    class="phone-input" 
                    placeholder="___) ______"
                    maxlength="9"
                    v-model="phoneNumber"
                  />
                </div>
              </div>

              <Button 
                label="Получить код авторизации" 
                class="get-code-btn p-button-info"
                @click="getAuthCode"
              />

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
                <Button label="Зарегистрируйтесь" class="register-link p-button-text" />
              </div>
            </div>
          </div>

          <div class="auth-image-side">
            <img src="../assets/welcome.png" alt="Welcome" class="auth-image" />
          </div>

          <Button icon="pi pi-times" class="close-btn p-button-text p-button-rounded" @click="showAuthModal = false" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
  name: 'AppHeader',
  components: {
    Button,
    InputText
  },
  setup() {
    const showAuthModal = ref(false)
    const phoneNumber = ref('')
    const authCode = ref('')
    const showCodeInput = ref(false)

    const getAuthCode = () => {
      showCodeInput.value = true
    }

    return {
      showAuthModal,
      phoneNumber,
      authCode,
      showCodeInput,
      getAuthCode
    }
  }
}
</script>

<style scoped>
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

:deep(.sections-btn1.p-button) {
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

/* Auth Modal Styles */
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
  gap: 5px;
}

.phone-prefix {
  color: #333;
  font-weight: 500;
  font-family: sans-serif;
  white-space: nowrap;
}

/* Убираем бордер у InputText компонента */
:deep(.phone-input-container .p-inputtext) {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent;
  flex: 1;
  padding: 0;
  font-size: 1.1rem;
  font-family: sans-serif;
  color: #333;
}

:deep(.phone-input-container .p-inputtext::placeholder) {
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

:deep(.register-link.p-button) {
  background: none;
  border: none;
  color: #199ee5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  font-family: sans-serif;
  padding: 0;
  margin-left: 5px;
}

:deep(.register-link.p-button:hover) {
  text-decoration: underline;
  background: none !important;
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

:deep(.close-btn.p-button) {
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

:deep(.close-btn.p-button:hover) {
  background: #f5f5f5;
}
</style>