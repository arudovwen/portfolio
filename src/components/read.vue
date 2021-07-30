<template>
  <v-container class="h-100 pb-10" fluid>
    <v-row class="h-100">
      <v-col cols="12" sm="12" md="8" class="h_100_vh overflow-y-auto">
        <v-container class="pa-0 bg-light">
          <v-row>
            <v-col cols="12" class="">
              <v-card elevation="0" class="rounded-0">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>Title</v-card-title>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12" class="">
              <v-sheet color="white" class="pa-4">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p class="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  eius vitae ea repellat voluptatibus dolore perferendis aliquid
                  temporibus magnam! Blanditiis!
                </p>
                <div class="d-flex">
                  <v-spacer></v-spacer>
                  <span class="d-flex">
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn></span
                  >
                </div>
                <v-divider></v-divider>

                <div class="py-4">
                  <h5 class="mb-4">Comments</h5>
                  <v-row class="side_nav overflow-y-auto">
                    <v-col cols="12" v-for="item in 10" :key="item">
                      <v-card class="d-flex elevation-0 pa-3">
                        <v-avatar>
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-avatar>
                        <v-card-text
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Libero laudantium voluptatum autem?</v-card-text
                        >
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="">
        <v-container class="secondary">
          <h4 class="mb-4">Related stories</h4>
          <v-row class="side_nav overflow-y-auto">
            <v-col cols="12" v-for="item in 10" :key="item">
              <v-card
                class="d-flex elevation-1 align-center pa-3 cursor-pointer"
                @click="$router.push(`/read/${item}`)"
              >
                <v-badge
                  bordered
                  top
                  color="primary"
                  dot
                  offset-x="12"
                  offset-y="12"
                >
                  <v-avatar size="60">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                    ></v-img>
                  </v-avatar>
                </v-badge>
                <div style="line-height: 0.5">
                  <v-card-subtitle
                    class="
                      text-uppercase
                      d-inline-block
                      text-truncate
                      py-0
                      lighter
                      text--secondary text-caption
                    "
                  >
                    Javascript</v-card-subtitle
                  >
                  <v-card-title
                    class="
                      py-0
                      d-inline-block
                      text--truncate
                      wrap
                      text-truncate--2
                    "
                    style="line-height: 1.2"
                    >Lorem ipsum dolor sit amet consectetur adipisic ipsum dolor
                    sit amet consectetur adipisic ipsum dolor sit amet
                    consectetur adipisicing elit.</v-card-title
                  >
                </div>
              </v-card>
            </v-col>
            <v-col> </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      topStories: [],
      latest: [],
    };
  },
};
</script>

<style scoped>
.side_nav {
  height: 80vh;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.trending::-webkit-scrollbar {
  display: none;
}
.date_avatar {
  position: absolute;
}
.v-card__title {
  font-size: 1rem !important;
}
</style>