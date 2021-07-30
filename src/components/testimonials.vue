<template>
  <v-container fluid class="h-100 d-flex justify-center align-center">
    <v-sheet
      class="pa-12 circle_1"
      color="adjacent "
      t
      rounded="circle"
    ></v-sheet>
    <div class="testimonials">
      <v-carousel height="350" v-model="model" show-arrows-on-hover>
        <v-carousel-item v-for="color in colors" :key="color">
          <v-card v-for="(item, i) in items" :key="i" color="secondary">
            <div class="d-flex flex-column flex-sm-row">
              <div class="profile_image">
                <v-img
                  class="rounded-lg d-none d-sm-block"
                  :src="item.src"
                  width="100%"
                  height="100%"
                ></v-img>
                <v-img
                  class="rounded-circle d-sm-none"
                  :src="item.src"
                  width="100%"
                  height="100%"
                ></v-img>
              </div>

              <div class="flex text-center text pa-3">
                <v-icon size="100" class="d-none d-sm-block" color="primary">
                  mdi-chat-processing
                </v-icon>
                <v-icon size="30" class="d-sm-none" color="primary">
                  mdi-chat-processing
                </v-icon>
                <div>
                  <p>{{ item }}</p>
                </div>

                <h4>{{ item.name }}</h4>
                <h3 class="adjacent--text">{{ item.title }}</h3>
              </div>
            </div>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-sheet
      class="pa-12 circle_2"
      color="accent lighten-3"
      rounded="circle"
    ></v-sheet>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        name: "Supermodel",
        title: "CEO, Entermarket",
      },
    ],
  }),
};
</script>

<style scoped>
.circle_2,
.circle_1 {
  width: 500px;
  height: 500px;
  position: absolute;
}
.circle_1 {
  top: 0;
  right: 0;
}
.circle_2 {
  bottom: 0;
  left: 0;
}
.testimonials {
  position: relative;
  z-index: 9;
  width: 60%;
}
.profile {
  margin-top: -30px;
}
.profile_image {
  width: 30%;
  position: relative;
  padding: 20px 10px;
}
.profile_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.text {
  width: 70%;
}
@media (max-width: 768px) {
  .testimonials {
    width: 100%;
  }
  .circle_2,
  .circle_1 {
    width: 200px;
    height: 200px;
  }
  .profile_image {
    width: 20%;
    margin: 0 auto;
  }

  .text {
    width: 100%;
  }
  p {
    font-size: 0.8rem;
  }
}
</style>