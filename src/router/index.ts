import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from '../pages/MainScreen.vue';
import SectionsPage from '../pages/SectionsPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainScreen
  },
  {
    path: '/sections',
    name: 'Sections',
    component: SectionsPage 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;