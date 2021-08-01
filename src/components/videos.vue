<template>
  <v-container class="h-100 pb-10 bg-light" fluid>
    <v-row class="h-100">
      <v-col cols="12" sm="9" class="">
        <v-toolbar color="" class="mb-3 py-2 rounded" dark flat>
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

        <v-sheet class="h-100 bg-light">
          <v-container class="bg-light">
            <h4 class="mb-4">Trending Videos</h4>
            <v-row class="h-100 overflow-y-auto trending">
              <v-col cols="6" sm="4" v-for="item in 12" :key="item">
                <v-card>
                  <video src="" width="100%" height="auto" controls></video>
                  <v-card-title
                    @click="$router.push(`/watch/title`)"
                    class="pt-0 pb-2 text-md-caption cursor-pointer"
                    >My first video</v-card-title
                  >
                </v-card>
                <v-divider></v-divider>
              </v-col>
            </v-row>
            <div class="pa-4 mt-5 text-center">
              <v-pagination
                class="mx-auto"
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="12" md="3" class="h_100_vh overflow-y-auto py-0">
        <v-container>
          <v-row class="h-100 overflow-y-auto side_nav">
            <v-col cols="12">
              <v-card
                class="mx-auto minitab overflow-hidden"
                width="100%"
                tile
                v-show="minitab"
              >
                <v-navigation-drawer permanent width="100%">
                  <v-list nav dense color="secondary">
                    <v-list-item-group v-model="selectedItem" color="white">
                      <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.text"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-navigation-drawer>
                <v-sheet
                  color="white"
                  height="70"
                  width="70"
                  class="rounded-circle d-sm-none"
                  style="position: absolute; bottom: -11px; right: -15px"
                ></v-sheet>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <h4>Popular Tags</h4>
              <div class="d-flex flex-wrap">
                <v-chip
                  v-for="item in 15"
                  :key="item"
                  @click="$router.push(`/stories/?category=${item}`)"
                  class="ma-1"
                  label
                  small
                >
                  <v-icon left> mdi-label </v-icon>
                  Tags
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn
        @click="minitab = !minitab"
        color="secondary"
        dark
        fixed
        bottom
        right
        fab
        small
        class="d-sm-none"
      >
        <v-icon>mdi-gesture-tap-button</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      minitab: true,
      topStories: [],
      latest: [],
      selectedItem: 0,
      page: 1,
      items: [
        { text: "Gaming", icon: "mdi-google-controller" },
        { text: "Technology", icon: "mdi-atom" },
        { text: "Crypto", icon: "mdi-bitcoin" },
        { text: "Life hacks", icon: "mdi-lightbulb-on" },
        { text: "Books", icon: "mdi-book-open-page-variant" },
        { text: "Poetry", icon: "mdi-folder-music" },
        { text: "Popular websites", icon: "mdi-web" },
      ],
      category: "",
      search: "",
    };
  },
  mounted() {
    if (window.innerWidth < 768) {
      this.minitab = false;
    }
  },
};
</script>

<style >
.v-card__title {
  font-size: 1.15rem !important;
}
</style>