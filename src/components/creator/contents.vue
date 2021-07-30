<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" class="pa-10 text-left">
        <div class="d-flex justify-space-between">
          <v-btn plain sm class="mb-5 px-0" @click="$router.go(-1)">
            <v-icon class="pr-1" size="small"> mdi-arrow-left</v-icon>
            <small>Back</small></v-btn
          >
          <v-btn
            @click="$router.push('/content/create')"
            elevation="3"
            color="primary"
            >Create
          </v-btn>
        </div>
        <div class="d-flex justify-space-between">
          <h2 class="mb-3">My Contents</h2>
          <v-switch
            v-model="mode"
            :label="!mode ? 'Light mode' : 'Dark mode'"
          ></v-switch>
        </div>
        <v-simple-table :class="mode ? 'theme--light' : 'theme--dark'">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="">Title</th>
                <th class="">Category</th>
                <th class="">Status</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td class="d-flex align-center">
                  <v-avatar color="secondary" size="20" tile class="mr-2"
                    ><img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                  /></v-avatar>
                  <span class="text--truncate text-truncate--1">
                    {{ item.name }}</span
                  >
                </td>
                <td>Video</td>
                <td>Active</td>
                <td class="text-center">
                  <v-btn-toggle :class="mode ? 'theme--light' : 'theme--dark'">
                    <v-btn x-small @click="$router.push('/content/edit')">
                      <v-icon class="pr-1" size="x-small">mdi-pencil</v-icon>
                      Edit
                    </v-btn>
                    <v-btn x-small @click="$router.push('/content/preview')">
                      <v-icon class="pr-1" size="x-small">mdi-eye</v-icon>
                      Preview
                    </v-btn>
                    <v-btn x-small @click="publish()">
                      <v-icon class="pr-1" size="x-small"
                        >mdi-cloud-upload</v-icon
                      >
                      Publish
                    </v-btn>

                    <v-btn x-small @click="drop()">
                      <v-icon class="pr-1" size="x-small">mdi-minus</v-icon>
                      Drop
                    </v-btn>
                  </v-btn-toggle>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center pa-4">
          <v-pagination
            class="mx-auto"
            v-model="page"
            :length="6"
            disabled
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
      page: 1,

      mode: true,
    };
  },
  methods: {
    publish() {},
    drop() {},
  },
};
</script>