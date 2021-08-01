<template>
  <v-container fluid class="h-100 d-flex justify-center align-center">
    <v-sheet
      class="pa-12 circle_1"
      color="adjacent "
      t
      rounded="circle"
    ></v-sheet>
    <div class="testimonials">
      <h2 class="text-center mb-6">Client Testimonials</h2>
      <v-carousel
        height="400"
        v-model="model"
        class="testimonial"
        show-arrows-on-hover
      >
        <template v-slot:prev="{ on, attrs }">
          <v-fab-transition>
            <v-btn v-bind="attrs" v-on="on" color="secondary" fab>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-fab-transition>
            <v-btn v-bind="attrs" v-on="on" color="secondary" fab>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-card color="white" class="rounded-lg">
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

              <div class="flex text-center text pa-5">
                <v-icon size="100" class="d-none d-sm-block" color="secondary">
                  mdi-chat-processing
                </v-icon>
                <v-icon size="30" class="d-sm-none" color="secondary">
                  mdi-chat-processing
                </v-icon>
                <div>
                  <p v-html="item.text"></p>
                </div>

                <h4 class="secondary--text">{{ item.name }}</h4>
                <h4 class="primary--text">{{ item.title }}</h4>
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
        text: "Success helped us with redesigning our website. He not only reduced its loading time by implementing the right technology but also ensured that it is attractive and easy-to-use. <br> Great job!.",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        name: "Komoni Ochuko",
        title: "Manager, AbayTours",
      },
      {
        color: "#1F7087",
        text: "Success offered us the right guidance when we required a website to promote our business. He kept in touch with us throughout the development process. In the end, we got a solution that has been helping us grow our business. <br> Thanks a ton!",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        name: "Obinna Ndukwu",
        title: "CEO, Commute Africa",
      },
      {
        color: "#1F7087",
        text: "Fantastic work! I am just impressed by the service quality. I hired Success for the development of my startup website and he satisfied me to the full. He is dedicated, attentive, talented and care much about the client needs. <br> Highly recommended.",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        name: "Kelvin Gbikeke,",
        title: "CEO, A1Synergy Constructions",
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
/* .testimonial.v-window:hover {
  overflow: initial;
} */
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
  padding: 10px 10px;
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