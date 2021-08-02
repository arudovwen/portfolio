import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";
import VueToast from "vue-toast-notification";
import Cloudinary from "cloudinary-vue";
import VueAnimateOnScroll from "vue-animate-onscroll";
import "./cloudinary.js";
import firebase from "firebase/app";
import "firebase/auth";

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

const firebaseConfig = {
  apiKey: "AIzaSyDro0wYbLLN86t4SBgH4ddfH9Yp8oiqXIg",
  authDomain: "arudovwen.firebaseapp.com",
  databaseURL: "https://arudovwen-default-rtdb.firebaseio.com",
  projectId: "arudovwen",
  storageBucket: "arudovwen.appspot.com",
  messagingSenderId: "750544240913",
  appId: "1:750544240913:web:32057025cdf52c0c9c4cb0",
  measurementId: "G-41JMRT91XQ",
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        Vue.$toast.error("You must be logged in to see this page");
        next({
          path: "/",
        });
      }
    });
  } else {
    next();
  }
});
sync(store, router);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
