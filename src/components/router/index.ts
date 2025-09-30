import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../section.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;