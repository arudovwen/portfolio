<template>
  <v-container class="h-100 pb-10" fluid>
    <v-row class="h-100">
      <v-col cols="12" sm="12" md="9" class="">
        <v-container class="pa-0 bg-light">
          <v-row>
            <v-col cols="12" class="">
              <video src="" width="100%" height="600" class="primary"></video>
            </v-col>
            <v-col cols="12" class="">
              <v-sheet color="white" class="pa-4">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div class="mb-4">
                  <h4>Description</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo eius vitae ea repellat voluptatibus dolore perferendis
                    aliquid temporibus magnam! Blanditiis!
                  </p>
                </div>
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
      <v-col cols="12" sm="12" md="3" class="">
        <v-container class="secondary">
          <h4 class="mb-4">Related stories</h4>
          <v-row class="side_nav overflow-y-auto">
            <v-col cols="12" v-for="item in 9" :key="item">
              <v-card>
                <video src="" width="100%" height="auto" controls></video>
                <v-card-title
                  class="pt-0 pb-2 text-md-caption cursor-pointer"
                  @click="`/watch/title`"
                  >My first video</v-card-title
                >
              </v-card>

              <v-divider></v-divider>
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
</style>