<template>
  <v-container fluid class="">
    <v-row class="d-none d-sm-flex">
      <v-col class="text-right">
        <span class="font-weight-bold page_title">{{ $route.name }}</span>
      </v-col>
    </v-row>
    <v-row class="about mb-5 mb-md-10">
      <v-col cols="12" class="mb-3 mb-md-5">
        <h2 class="text-center primary--text mobile_header">
          I design and build digital products
        </h2>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="w-100 bg-amber-darken-2">
          <v-img class="profile_img secondary"></v-img></div
      ></v-col>
      <v-col cols="12" sm="6" class="pb-10">
        <div class="px-5 px-md-10">
          <div class="mb-10">
            <p class="mb-4 about_text">
              I’m a Full-stack Web Developer with about 4 years of experience, I
              love to design/build websites.
            </p>
            <p class="mb-4 about_text">
              I am inspired by the work to do, new challenges motivate me, i’m
              fueled by high energy levels and boundless enthusiasm. I see every
              new challenge as an opportuity to upskill my capbilities so its
              always fun for me...
            </p>
            <p class="mb-4 about_text">Read more in my RESUME below</p>
          </div>
          <div class="text-left">
            <v-btn rounded color="primary" large ripple>Download Resume</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="pb-10">
        <v-sheet
          class="px-10 pt-6 primary rounded extra_info text-center"
          rounded="xl"
        >
          <v-img
            alt="icon"
            width="80"
            class="mb-4"
            :src="require('@/assets/images/dev.svg')"
          ></v-img>
          <v-sheet
            class="pa-10 white rounded extra__info elevation-10"
            rounded="xl"
          >
            <v-container>
              <v-row class="text-center mb-5">
                <v-col v-for="(item, id) in items" :key="id" cols="12" sm="4">
                  <h3 class="primary--text">{{ item.title }}</h3>
                  <p>
                    {{ item.text }}
                  </p>
                </v-col>
              </v-row>

              <div>
                View my resume for more information
                <v-btn small plain color="primary" large ripple>Link</v-btn>
              </div>
            </v-container>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "<Languages I Speak/>",
          text: "Html, Css, Javascript, PHP, Laravel, Vue Js, React Js, Node Js",
        },
        {
          title: "<Development Tools/>",
          text: "Firebase, Netlify, Github, Postman, Bitbucket, Bootstrap, Vuetify, Command line",
        },
        {
          title: "<Database/>",
          text: "Mysql Db, Postgress Db, MongoDb",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container--fluid {
  padding-bottom: 150px;
}
.about {
  width: 75%;
  margin: 0 auto;
}
.profile_img {
  height: 60vh;
}
p.about_text {
  font-size: 1.25rem;
  line-height: 1.5;
}
.extra_info {
  width: 75%;
  margin: 0 auto;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.extra__info {
  width: 100%;
  height: auto;
  margin: 0 auto;
  left: 0;
  right: 0;
}
@media (max-width: 768px) {
  .about {
    width: 100%;
  }
  .profile_img {
    height: 30vh;
  }
  p.about_text {
    font-size: 1rem;
  }
  .extra_info {
    width: 100%;
  }
  .container--fluid {
    padding-bottom: 30rem;
  }
}
</style>