<template>
  <v-container class="h-100 pb-10" fluid>
    <v-row class="h-100 justify-center pa-10">
      <v-col
        cols="12"
        sm="12"
        md="8"
        class="h_100_vh overflow-y-auto text-left"
      >
        <v-btn plain sm class="mb-5 px-0" @click="$router.go(-1)">
          <v-icon class="pr-1" size="small"> mdi-arrow-left</v-icon>
          <small>Back</small></v-btn
        >
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
              </v-sheet>
            </v-col>
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