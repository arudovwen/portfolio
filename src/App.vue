<template>
  <v-app :style="cssProps">
    <router-view name="header" />
    <v-main class="bg-light">
      <transition name="fab-transition" mode="out-in">
        <router-view />
      </transition>

      <router-view name="footer" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

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
