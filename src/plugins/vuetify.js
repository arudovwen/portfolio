import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
});

export default new Vuetify({
  treeShake: true,
  theme: {
    themes: {
      light: {
        primary: "#423633",
        secondary: "#B28B67",
        accent: "#70738a",
        adjacent: "#babdb9",
        error: "#b71c1c",
        bglight: "#f7f8fa",
      },
    },
  },
});
