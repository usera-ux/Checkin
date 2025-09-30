import { createRouter, createWebHistory } from 'vue-router';
import SectionsPage from '../components/SectionsPage.vue';

const routes = [
  {
    path: '/section',
    name: 'Section',
    component:SectionsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;