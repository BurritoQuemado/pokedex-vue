import './assets/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

//declaracion del uso de vue router para el manejo de diferentes direcciones
app.use(router);
app.mount('#app');
