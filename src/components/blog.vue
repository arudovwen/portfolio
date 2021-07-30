<template>
  <v-container class="h-100 pb-10" fluid>
    <v-row class="h-100">
      <v-col cols="12" sm="12" md="9" class="h_100_vh overflow-y-auto">
        <v-toolbar color="" class="mb-3 py-2" dark flat>
          <v-list color="" class="d-flex transparent">
            <v-list-item @click="category = ''">All</v-list-item>
            <v-list-item @click="category = 'tech'">Tech</v-list-item>
            <v-list-item @click="category = 'gaming'">Gaming</v-list-item>
            <v-list-item @click="category = 'music'">Music</v-list-item>
          </v-list>
          <v-spacer></v-spacer>
          <v-text-field
            hide-details
            prepend-icon="mdi-magnify"
            single-line
          ></v-text-field>
        </v-toolbar>

        <v-container class="pa-0 bg-light">
          <v-row>
            <v-col cols="12" class="mb-5">
              <v-carousel
                cycle
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
                height="200px"
              >
                <v-carousel-item v-for="(slide, i) in 3" :key="i">
                  <v-card
                    elevation="0"
                    class="rounded-0"
                    @click="$router.push(`/read/title`)"
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title>Top Stories</v-card-title>
                    </v-img>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" class="mb-7">
              <v-row>
                <v-col sm="4" v-for="item in 3" :key="item">
                  <v-card
                    elevation="0"
                    class="
                      rounded-0
                      d-flex
                      justify-center
                      align-center
                      position-relative
                    "
                  >
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                    </v-img>

                    <div class="position-absolute w-50">
                      <v-btn
                        :to="`/stories/?category=title`"
                        block
                        class="white elevation-0 rounded-0"
                        >Tech</v-btn
                      >
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" class="mb-7">
              <h3 class="mb-4">Top posts</h3>

              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  v-for="item in 10"
                  :key="item"
                  @click="$router.push(`/read/title`)"
                >
                  <v-card
                    class="d-flex elevation-1 pa-3 align-center cursor-pointer"
                  >
                    <v-avatar>
                      <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                      />
                    </v-avatar>
                    <v-card-text @click="$router.push(`/watch/title`)"
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero laudantium voluptatum autem?</v-card-text
                    >
                  </v-card>
                </v-col>
              </v-row>
              <div class="pa-4 mt-5 text-center">
                <v-btn plain small color="secondary" to="stories"
                  >View more</v-btn
                >
              </div>
            </v-col>

            <v-col cols="12">
              <h3 class="mb-4">Latest posts</h3>

              <v-row>
                <v-col
                  cols="12"
                  sm="3"
                  v-for="item in 10"
                  :key="item"
                  @click="$router.push(`/read/title`)"
                >
                  <v-card
                    height="320"
                    class="
                      position-relative
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      cursor-pointer
                      overflow-hidden
                    "
                  >
                    <v-img
                      class="white--text align-start"
                      height="160px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                    <span class="date_avatar">
                      <v-sheet rounded="circle" class="pa-1 elevation-5">
                        <v-avatar color="white" size="60">
                          <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          />
                        </v-avatar>
                      </v-sheet>
                    </span>
                    <div style="height: 160px" class="w-100 d-flex flex-column">
                      <div class="text-left w-100 pt-5">
                        <v-card-title
                          class="
                            text--primary
                            pb-0
                            text--truncate.text-truncate--3
                          "
                        >
                          Whitehaven Beach
                        </v-card-title>
                      </div>
                      <v-spacer></v-spacer>
                      <div class="d-flex bg-light w-100justify-space-around">
                        <v-card
                          color="bglight"
                          outlined
                          tile
                          class="
                            bg-light
                            w-100
                            elevation-0
                            pa-3
                            px-4
                            rounded-0
                            primary--text
                          "
                        >
                          <v-icon
                            size="small"
                            class="mr-1"
                            color="primary"
                            center
                          >
                            mdi-chat
                          </v-icon>
                          <small class="primary--text"> 3</small>
                        </v-card>
                        <v-card
                          color="bglight"
                          class="bg-light w-100 elevation-0 pa-3 px-4 rounded-0"
                        >
                          <v-icon
                            size="small"
                            center
                            class="mr-1"
                            color="primary"
                          >
                            mdi-heart
                          </v-icon>
                          <small class="primary--text"> 3</small>
                        </v-card>
                        <v-card
                          color="bglight"
                          class="bg-light w-100 elevation-0 pa-3 px-4 rounded-0"
                        >
                          <v-icon
                            size="small"
                            class="mr-1"
                            center
                            color="primary"
                          >
                            mdi-eye
                          </v-icon>
                          <small class="primary--text"> 3</small>
                        </v-card>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <div class="pa-4 mt-5 text-center">
                <v-btn plain small color="secondary" to="/stories"
                  >View more</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" sm="12" md="3" class="h_100_vh">
        <v-sheet class="pa-5 secondary h-100">
          <v-container>
            <h4 class="mb-4">Trending Videos</h4>
            <v-row class="h-100 overflow-y-auto trending">
              <v-col cols="12" v-for="item in 9" :key="item">
                <v-card>
                  <video src="" width="100%" height="auto" controls></video>
                  <v-card-title
                    @click="$router.push(`/watch/title`)"
                    class="pt-0 pb-2 text-md-caption cursor-pointer vid_title"
                    >My first video</v-card-title
                  >
                </v-card>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <div class="pa-4 mt-5 text-center">
              <v-btn plain small color="primary" to="/videos">View more</v-btn>
            </div>
            <v-row>
              <v-col>
                <h4>Popular Tags</h4>
                <div class="d-flex flex-wrap">
                  <v-chip
                    v-for="item in 15"
                    :key="item"
                    class="ma-1"
                    label
                    small
                    @click="$router.push(`/stories/?category=${item}`)"
                  >
                    <v-icon left> mdi-label </v-icon>
                    Tags
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
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
      category: "",
      search: "",
    };
  },
};
</script>

<style scoped>
.trending {
  height: 55vh;
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
  font-size: 1.1rem !important;
}
.vid_title {
  font-size: 0.9rem !important;
}
</style>