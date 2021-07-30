<template>
  <v-container class="h-100 pb-10 bg-light" fluid>
    <v-row class="h-100">
      <v-col cols="12" sm="9" class="">
        <v-toolbar color="" class="mb-3 py-2 rounded" dark flat>
          <v-list color="" class="d-flex transparent">
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
            <h4 class="mb-4">Read Stories</h4>
            <v-row class="h-100 overflow-y-auto trending">
              <v-col cols="12" sm="3" v-for="item in 16" :key="item">
                <v-card
                  height="320"
                  class="
                    position-relative
                    d-flex
                    flex-column
                    justify-center
                    align-center
                    cursor-pointer
                  "
                  @click="$router.push(`/read/title`)"
                >
                  <v-img
                    class="white--text align-start"
                    height="160px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                  </v-img>
                  <span class="date_avatar">
                    <v-sheet rounded="circle" class="pa-1 elevation-5">
                      <v-avatar class="elevation-2" size="60" color="primary">
                        <span class="white--text text-center"
                          >Jan <br />
                          20</span
                        >
                      </v-avatar>
                    </v-sheet>
                  </span>
                  <div class="text-left w-100 pt-5" style="height: 160px">
                    <v-card-title
                      class="
                        text--primary
                        pb-0
                        h6
                        text--truncate
                        text-truncate--2
                      "
                    >
                      Whitehaven Beach
                    </v-card-title>
                    <v-card-text
                      class="d-inline-block text-truncate text-left pb-0"
                    >
                      Whitsunday Island, Whitsunday Islands</v-card-text
                    >

                    <v-card-actions class="px-4 py-0">
                      <v-divider></v-divider>
                      <v-btn icon small>
                        <span class="ml-4 text-sm-subtitle">
                          <v-icon size="small">mdi-chat</v-icon>
                          <small>21</small></span
                        >
                      </v-btn>
                    </v-card-actions>

                    <v-card-subtitle class="caption secondary--text py-2"
                      >Javascipt</v-card-subtitle
                    >
                  </div>
                </v-card>
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

      <v-col cols="12" sm="12" md="3" class="h_100_vh py-0">
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
                  v-for="item in 25"
                  :key="item"
                  class="ma-1"
                  @click="$router.push(`/stories/?category=${item}`)"
                  label
                  small
                >
                  <v-icon left size="small"> mdi-label </v-icon>
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
        { text: "Forex", icon: "mdi-currency-usd" },
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

<style scoped>
.date_avatar {
  position: absolute;
}
.v-card__title {
  font-size: 1rem !important;
}
</style>