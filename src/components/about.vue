<template>
  <v-container fluid class="pb-15">
    <v-row>
      <v-col class="text-right">
        <span class="font-weight-bold page_title">{{ $route.name }}</span>
      </v-col>
    </v-row>
    <v-row class="about mb-5 mb-md-10">
      <v-col cols="12" class="mb-3 mb-md-5">
        <h2 class="text-center primary--text">
          I design and build digital products
        </h2>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="w-100 bg-amber-darken-2">
          <v-img class="profile_img secondary"></v-img></div
      ></v-col>
      <v-col cols="12" sm="6">
        <div class="px-5 px-md-10">
          <div class="mb-10">
            <p class="mb-4 about_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio perferendis nostrum voluptatem maxime nihil iusto incidunt,
              error cum quo tempore!
            </p>
            <p class="mb-4 about_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio perferendis nostrum voluptatem maxime nihil iusto incidunt,
              error cum quo tempore!
            </p>
            <p class="mb-4 about_text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              optio
            </p>
          </div>
          <div class="text-left">
            <v-btn rounded color="primary" large ripple>Download Resume</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="py-10">
        <v-sheet
          class="pa-10 primary rounded extra_info text-center"
          rounded="xl"
        >
          <v-img
            alt="icon"
            width="100"
            class="mb-4"
            :src="require('@/assets/images/dev.svg')"
          ></v-img>
          <v-sheet
            class="pa-10 white rounded extra__info elevation-10"
            rounded="xl"
          >
            <v-container>
              <v-row>
                <v-col v-for="(item, id) in items" :key="id" cols="12" sm="4">
                  <h3 class="primary--text">{{ item.title }}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis illo est nemo?
                  </p>
                </v-col>
              </v-row>
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
          text: "",
        },
        {
          title: "<Development Tools/>",
          text: "",
        },
        {
          title: "<Database/>",
          text: "",
        },
      ],
    };
  },
};
</script>
<style scoped>
.about {
  width: 75%;
  margin: 0 auto;
}
.profile_img {
  height: 70vh;
}
p.about_text {
  font-size: 1.25rem;
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
}
</style>