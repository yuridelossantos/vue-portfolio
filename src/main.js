import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router

createApp(App)
  .use(router) // Add the router to the app
  .mount('#app');
