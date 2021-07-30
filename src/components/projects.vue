<template>
  <v-container fluid class="h-100">
    <v-row>
      <v-col class="d-flex justify-space-between">
        <h3>Here are some of my recent projects</h3>
        <span class="font-weight-bold page_title">{{ $route.name }}</span>
      </v-col>
    </v-row>

    <v-row class="justify-center align-center">
      <v-sheet class="sheet rounded-circle theme--transparent">
        <span
          elevation="20"
          @click="showProject(project)"
          v-for="(project, id) in items"
          :key="id"
        >
          <v-hover v-slot="{ hover }">
            <div class="hold" elevation="20" :class="{ 'on-hover': hover }">
              <v-img
                class="rounded-circle"
                src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              >
              </v-img>
            </div>
          </v-hover>
        </span>

        <v-sheet class="sheet2 rounded-circle secondary">
          <v-sheet class="sheet3 rounded-circle" elevation="10">
            <v-sheet class="sheet4 rounded-circle">
              <v-hover v-slot="{ hover }">
                <v-card class="hold on-hover" elevation="12">
                  <v-img
                    src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="
                          d-flex
                          transition-fast-in-fast-out
                          v-card--reveal
                          text-h2
                          white--text
                          hover_bg
                        "
                        style="height: 100%"
                      >
                        <v-card-title class="text-h4 white--text">
                          <v-row
                            class="fill-height flex-column"
                            justify="space-between"
                          >
                            <div class="text-center pa-3 pa-sm-5">
                              <p
                                class="
                                  mt-2 mt-sm-4
                                  font-weight-bold
                                  project_name
                                "
                              >
                                {{ active.name }}
                              </p>
                              <p
                                class="
                                  ma-0
                                  mb-6
                                  text-body-1
                                  font-italic
                                  project_desc
                                "
                              >
                                {{ active.description }}
                              </p>
                              <a
                                :href="active.link"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-decoration-none"
                              >
                                <v-btn color="success">Visit</v-btn>
                              </a>
                            </div>
                          </v-row>
                        </v-card-title>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-row>
    <v-row>
      <v-col class="text-center"> <h3>Email for more</h3></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "SkillsGuruh",
          description: "All about Skillsguruh",
          link: "https://skillsguruh.com",
          image: "",
        },
        {
          name: "Commute Africa ",
          description: "All about Skillsguruh",
          link: "https://commuteafrica.africa",
          image: "",
        },
        {
          name: "Karisoft App",
          description: "All about Skillsguruh",
          link: "https://karisoft.io",
          image: "",
        },
        {
          name: "Imo Ministry of Education",
          description: "All about Skillsguruh",
          link: "https://ministryofeducation.im.gov.ng/",
          image: "",
        },
        {
          name: "Karisoft Finance",
          description: "All about Skillsguruh",
          link: "https://karisoft.finance",
          image: "",
        },

        {
          name: "BizGuruh",
          description: "All about Skillsguruh",
          link: "https://bizguruh.com",
          image: "",
        },
        {
          name: "LfaMarket",
          description: "All about Skillsguruh",
          link: "https://lfamarket.herokuapp.com",
          image: "",
        },
        {
          name: "Imo Learning Centre",
          description: "All about Skillsguruh",
          link: "http://isl-center.herokuapp.com",
          image: "",
        },
      ],
      active: {},
    };
  },
  mounted() {
    this.active = this.items.slice().shift();
  },
  methods: {
    showProject(item) {
      this.active = item;
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
}
.sheet {
  height: 90vh;
  width: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
}
.sheet2 {
  position: relative;
  width: 55%;
  height: 55%;
  z-index: 2;
  /* box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.sheet span {
  position: absolute;
  width: 18%;
  height: 18%;
  background: var(--v-adjacent);
  border-radius: 50rem;
}
.sheet span:nth-child(1) {
  top: 10px;
}
.sheet span:nth-child(2) {
  bottom: 10px;
}
.sheet span:nth-child(3) {
  right: 10px;
}
.sheet span:nth-child(4) {
  left: 10px;
}
.sheet span:nth-child(5) {
  top: 10%;
  right: 10%;
}
.sheet span:nth-child(6) {
  top: 10%;
  left: 10%;
}
.sheet span:nth-child(7) {
  bottom: 10%;
  right: 10%;
}
.sheet span:nth-child(8) {
  bottom: 10%;
  left: 10%;
}
.sheet span:nth-child(9) {
  right: -25%;
}
.sheet span:nth-child(10) {
  left: -25%;
}
.sheet span:nth-child(11) {
  top: 18%;
  right: -18%;
}
.sheet span:nth-child(12) {
  top: 18%;
  left: -18%;
}
.sheet span:nth-child(13) {
  bottom: 18%;
  right: -18%;
}
.sheet span:nth-child(14) {
  bottom: 18%;
  left: -18%;
}

.sheet3 {
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.sheet4 {
  position: relative;
  width: 90%;
  height: 90%;
  z-index: 2;
  box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px 1px 19px 6px rgba(0, 0, 0, 0.75) inset;
  overflow: hidden;
}
.sheet4 div {
  height: 100%;
  width: 100%;
}
.hold {
  transition: opacity 0.4s ease-in-out;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.hold:not(.on-hover) {
  opacity: 0.6;
}
.hold div {
  width: 100%;
  height: 100%;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.hover_bg {
  background: rgba(0, 0, 0, 0.4);
}
@media only screen and (max-width: 768px) {
  .sheet2 {
    width: 40%;
    height: 40%;
  }
  .sheet3 {
    width: 90%;
    height: 90%;
  }
  .sheet4 {
    width: 90%;
    height: 90%;
  }
  .sheet span {
    position: absolute;
    width: 10%;
    height: 10%;
    background: #a4c2db;
    border-radius: 50rem;
  }
  .sheet span:nth-child(1) {
    top: 15%;
  }
  .sheet span:nth-child(2) {
    bottom: 15%;
  }
  .sheet span:nth-child(3) {
    right: 18%;
  }
  .sheet span:nth-child(4) {
    left: 18%;
  }
  .sheet span:nth-child(5) {
    top: 18%;
    right: 30%;
  }
  .sheet span:nth-child(6) {
    top: 18%;
    left: 30%;
  }
  .sheet span:nth-child(7) {
    bottom: 18%;
    right: 30%;
  }
  .sheet span:nth-child(8) {
    bottom: 18%;
    left: 30%;
  }
  .sheet span:nth-child(9) {
    top: 30%;
    right: 19%;
  }
  .sheet span:nth-child(10) {
    left: 30%;
    bottom: 19%;
  }
  .sheet span:nth-child(11) {
    top: 30%;
    right: 19%;
  }
  .sheet span:nth-child(12) {
    top: 30%;
    left: 19%;
  }
  .sheet span:nth-child(13) {
    bottom: 30%;
    right: 18%;
  }
  .sheet span:nth-child(14) {
    bottom: 30%;
    left: 18%;
  }
}
@media only screen and (max-width: 576px) {
  .sheet2 {
    width: 70%;
    height: 42%;
  }
  .sheet3 {
    width: 90%;
    height: 90%;
  }
  .sheet4 {
    width: 90%;
    height: 90%;
  }
  .sheet span {
    position: absolute;
    width: 10%;
    height: 10%;
    background: #a4c2db;
    border-radius: 50rem;
  }
  .sheet span:nth-child(1) {
    top: 15%;
  }
  .sheet span:nth-child(2) {
    bottom: 15%;
  }
  .sheet span:nth-child(3) {
    right: 45%;
    top: 0;
  }
  .sheet span:nth-child(4) {
    left: 30%;
    bottom: 1%;
  }
  .sheet span:nth-child(5) {
    top: 15%;
    right: 30%;
  }
  .sheet span:nth-child(6) {
    top: 15%;
    left: 30%;
  }
  .sheet span:nth-child(7) {
    bottom: 15%;
    right: 30%;
  }
  .sheet span:nth-child(8) {
    bottom: 15%;
    left: 30%;
  }
  .sheet span:nth-child(9) {
    top: unset;
    bottom: 1%;
    right: 30%;
  }
  .sheet span:nth-child(10) {
    bottom: 1%;
    left: 45%;
  }
  .sheet span:nth-child(11) {
    top: 0%;
    right: 30%;
  }
  .sheet span:nth-child(12) {
    top: 0%;
    left: 30%;
  }
  .sheet span:nth-child(13) {
    bottom: 27%;
    right: 25%;
  }
  .sheet span:nth-child(14) {
    left: 25%;
    bottom: 27%;
  }
  .project_name {
    font-size: 1rem;
    margin-bottom: 0px;
  }
  .project_desc {
    font-size: 0.8rem !important;
    line-height: 1.2;
  }
}
</style>