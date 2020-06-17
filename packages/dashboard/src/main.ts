import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins'

import { createFakeServer } from "@/mirage";

if (process.env.NODE_ENV !== "production") {
  createFakeServer({ environment: "development" });
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
