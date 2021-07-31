<template>
  <v-sheet class="">
    <v-navigation-drawer class="" v-model="drawer" app fixed>
      <v-list class="h-100 d-flex flex-column justify-space-between">
        <v-list-item>
          <router-link to="/" class="text-decoration-none">
            <v-list-item-avatar class="mx-auto">
              <v-img :src="require('@/assets/images/logo.png')"></v-img>
            </v-list-item-avatar>
          </router-link>
        </v-list-item>

        <v-list-item class=""
          ><span class="rotate_90"
            ><router-link class="text-decoration-none" to="/about">
              About
            </router-link></span
          ></v-list-item
        >
        <v-list-item
          ><span class="rotate_90"
            ><router-link class="text-decoration-none" to="/projects"
              >Projects</router-link
            ></span
          ></v-list-item
        >
        <v-list-item class=""
          ><span class="rotate_90"
            ><router-link class="text-decoration-none" to="/testimonials"
              >Testimonials</router-link
            ></span
          ></v-list-item
        >
        <v-list-item class=""
          ><span class="rotate_90"
            ><router-link
              class="text-decoration-none"
              target="_blank"
              to="/blog"
              >Blog</router-link
            ></span
          ></v-list-item
        >
        <v-list-item class=""
          ><span class="rotate_90"
            ><router-link class="text-decoration-none" to="/contact"
              >Contact</router-link
            ></span
          ></v-list-item
        >
        <v-list-item class=""
          ><span class="rotate_90"
            ><router-link class="text-decoration-none" to="/authenticate"
              >Login</router-link
            ></span
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="d-lg-none justify-space-between">
      <div class="pa-2">
        <v-avatar size="35" color="white" @click="$router.push('/')">
          <img :src="require('@/assets/images/logo.png')" alt="avatar" />
        </v-avatar>
      </div>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
<style scoped lang="scss">
.v-list-item {
  justify-content: center;
}
nav {
  z-index: 999;
}
@media only screen and (max-width: 768px) {
  .h-100 {
    height: auto;
  }
}
@media (max-width: 768px) {
  .rotate_90 {
    transform: unset;
  }
}
</style>