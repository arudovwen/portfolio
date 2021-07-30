import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import VueToast from "vue-toast-notification";
import Cloudinary from "cloudinary-vue";
import VueAnimateOnScroll from "vue-animate-onscroll";
import "./cloudinary.js";

import "animate.css";
import "vue-toast-notification/dist/theme-sugar.css";
import "vue-search-select/dist/VueSearchSelect.css";
import "./assets/scss/variables.scss";

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "arudovwen-me",
  },
});
Vue.use(require("vue-moment"));
Vue.use(VueToast, {
  position: "top-right",
});
Vue.use(VueAnimateOnScroll);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
