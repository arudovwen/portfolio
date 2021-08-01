<template>
  <v-footer light padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary flex-column flex-md-row">
        <strong class="subheading adjacent--text"
          >Get connected with me on social networks!</strong
        >

        <v-spacer></v-spacer>

        <div class="d-flex">
          <v-btn
            plain
            color="adjacent"
            href="https://github.com/arudovwen"
            target="_blank"
            >Github
          </v-btn>
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4 d-flex"
            dark
            icon
            :href="icon.link"
            target="_blank"
            color="adjacent"
          >
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="py-2 text-center primary--text">
        {{ new Date().getFullYear() }} — <strong>Arudovwen.me</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      // {
      //   name: "mdi-github",
      //   link: "https://github.com/arudovwen",
      // },
      {
        name: "mdi-whatsapp",
        link: "https://api.whatsapp.com/send?phone=2348160723910&text=Hi%20there",
      },
      {
        name: "mdi-twitter",
        link: "https://twitter.com/a_sucsex",
      },
      {
        name: "mdi-linkedin",
        link: "https://linkedin.com/in/success-ahon",
      },
      {
        name: "mdi-instagram",
        link: "https://instagram.com/arudovwen",
      },
    ],
  }),
};
</script>

<style scoped>
@media (max-width: 768px) {
  .subheading {
    font-size: 0.9rem;
  }
}
</style>