import Vue from "vue";
import Ysapp from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueCompositionApi from "@vue/composition-api";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
    store,
    vuetify,
    router,
    render: h => h(Ysapp)
}).$mount("#app");
