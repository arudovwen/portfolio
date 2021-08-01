<template>
  <v-container fluid class="h-100 pa-0 ma-0">
    <v-row class="justify-end h-100" no-gutters>
      <v-col
        cols="10"
        class="d-flex align-end pa-0 animate__animated animate__slideInRight"
      >
        <div class="main_page">
          <v-container class="h-100 pa-0">
            <v-row class="name_row" no-gutters>
              <v-col>
                <div
                  class="name_display animate__animated animate__slideInLeft"
                  v-html="name"
                ></div>
              </v-col>
            </v-row>
            <v-row class="img_row flex-column flex-md-row my-0 mx-auto">
              <v-col md="6" class="pa-0 pt-5 pt-md-0 mb-5 mb-md-0">
                <div
                  class="h-100 secondary animate__animated animate__slideInUp"
                >
                  <v-img
                    src=""
                    class="profile_img animate__animated animate__flash"
                  ></v-img>
                </div>
              </v-col>
              <v-col
                md="6"
                class="px-0 pa-md-10 d-flex flex-column justify-center"
              >
                <p
                  class="
                    mb-6 mb-md-10
                    short_info
                    adjacent--text
                    animate__animated animate__fadeIn animate__slower
                  "
                >
                  Hey, i’m Success, I design and build digital products, new
                  challenges motivate me, i’m inspired by the work i do, i guess
                  you can call me a builder.
                </p>
                <p
                  class="
                    font-weight-bold
                    title
                    white--text
                    animate__animated animate__fadeIn animate__slower
                  "
                >
                  {{ title }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    name: "<span class='primary--tex'>Success</span> <span class='secondary--text'>A. Ahon</span>",
    title: "<Full-Stack Web Developer />",
  }),
  methods: {},
};
</script>
<style scoped lang="scss">
.main_page {
  width: 100%;
  height: 93%;
  background: var(--v-primary);
  position: relative;
}
.name_display {
  font-size: 3rem;
  position: relative;
  margin-left: -17%;
}

.name_row {
  height: 20%;
}
.img_row {
  height: 80%;
  width: 85%;
  margin: 0 auto;
}
.short_info {
  font-size: 1.5rem;
}
.title {
  font-size: 1.5rem;
}
.profile_img {
  height: 100%;
}
@media only screen and(max-width:1024px) {
  .short_info {
    font-size: 1rem;
  }
  .title {
    font-size: 1rem;
  }
  .profile_img {
    height: 50vh;
  }
}
@media only screen and(max-width:768px) {
  .main_page {
    height: 100%;
  }

  .name_display {
    font-size: 2rem;
    margin-left: 6%;
  }
  .name_row {
    height: auto;
  }
  .img_row {
    height: auto;
  }
  .short_info {
    font-size: 0.9rem;
  }
  .title {
    font-size: 0.9rem;
  }
}
</style>