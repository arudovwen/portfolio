<template>
  <v-app :style="cssProps">
    <router-view name="header" />
    <v-main class="bg-light">
      <transition name="slide-x-reverse-transition" mode="out-in">
        <router-view />
      </transition>

      <router-view name="footer" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  metaInfo: {
    title: "Arudovwen.me",
    titleTemplate: "%s | Arudovwen.me",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },

  data: () => ({
    //
  }),
  computed: {
    cssProps() {
      var themeColors = {};
      Object.keys(this.$vuetify.theme.themes.light).forEach((color) => {
        themeColors[`--v-${color}`] = this.$vuetify.theme.themes.light[color];
      });
      return themeColors;
    },
  },
};
</script>
<style scoped>
</style>
