// main.js
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
//import BootstrapVue from 'bootstrap-vue';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Vue.use(BootstrapVue);

// ... Autres configurations ...

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
