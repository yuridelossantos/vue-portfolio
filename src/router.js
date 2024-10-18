import { createRouter, createWebHistory } from 'vue-router';
import DashboardComponent from './components/DashboardComponent.vue';
import LoginPage from './components/LoginPage.vue';
import Certifications from './components/Certifications.vue';
import Resume from './components/Resume.vue';
import Contacts from './components/Contacts.vue';
import Testimonials from './components/Testimonials.vue';
import FeaturedProjects from './components/FeaturedProjects.vue';

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

  {
    path: '/contacts',
    component: Contacts, // Add the new Contacts route
  },

  {
    path: '/projects',
    component: FeaturedProjects, // Add the new Contacts route
  },

  {
    path: '/testimonials',
    component: Testimonials, // Add the new Testimonials route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;