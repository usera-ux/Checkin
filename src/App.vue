<template>
  <div id="app">
    <MainScreen/>
    <SectionsPage />
    <HunterShopPage/>
  </div>
</template>

<script>
import HunterShopPage from './pages/HunterShopPage.vue';
import MainScreen from './pages/MainScreen.vue';
import SectionsPage from './pages/SectionsPage.vue'

export default {
  name: 'App',
  components:
  {
    SectionsPage,
    MainScreen,
    HunterShopPage
  }
}
</script>