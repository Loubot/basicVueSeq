
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import services from "./services/TutorialDataService.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
window.axios = require('axios');




createApp(App).use(router).mount('#app');
