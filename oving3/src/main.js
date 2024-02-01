import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer router
import store from './store'; // Importer Vuex store

createApp(App).use(store).use(router).mount('#app')



