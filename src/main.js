import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import bezoekerIndex from "./components/bezoeker/index"

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: bezoekerIndex},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')