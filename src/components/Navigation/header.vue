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

        <v-list-item class="" to="/about"
          ><span class="rotate_90"> About </span></v-list-item
        >
        <v-list-item to="/projects"
          ><span class="rotate_90">Projects</span></v-list-item
        >
        <v-list-item to="/testimonials" class=""
          ><span class="rotate_90">Testimonials</span></v-list-item
        >
        <v-list-item target="_blank" to="/blog" class=""
          ><span class="rotate_90">Blog</span></v-list-item
        >
        <v-list-item to="/contact" class=""
          ><span class="rotate_90">Contact</span></v-list-item
        >
        <v-list-item class="" to="/authenticate" v-if="!user.loggedIn"
          ><span class="rotate_90">Login</span></v-list-item
        >
        <v-list-item @click="logout" class="" v-if="user.loggedIn"
          ><span class="rotate_90">Logout</span></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="d-lg-none justify-space-between" elevate-on-scroll>
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
import firebase from "firebase/app";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
  },
  computed: {
    ...mapGetters({ user: "user" }),
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