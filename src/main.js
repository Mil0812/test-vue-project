import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

createApp(App).mount('#app')

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
