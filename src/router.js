import { createRouter, createWebHistory } from 'vue-router';
import DashboardComponent from './components/DashboardComponent.vue';
import LoginPage from './components/LoginPage.vue';
import Certifications from './components/Certifications.vue';
import Resume from './components/Resume.vue';

const routes = [
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'DashboardComponent',
    component: DashboardComponent,
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;