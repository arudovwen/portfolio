<template>
  <v-container fluid class="h-100">
    <v-row class="d-none d-sm-flex">
      <v-col class="d-flex justify-space-between">
        <h3>Here are some of my recent projects</h3>
        <span class="font-weight-bold page_title">{{ $route.name }}</span>
      </v-col>
    </v-row>

    <v-row class="justify-center align-center">
      <v-sheet class="sheet rounded theme--transparent">
        <span
          @click="showProject(project)"
          v-for="(project, id) in items.slice(0, 8)"
          :key="id"
        >
          <v-hover v-slot="{ hover }">
            <div
              class="hold pa-1 white rounded elevation-2"
              :class="{ 'on-hover': hover }"
            >
              <v-img class="rounded" :src="project.image"> </v-img>
            </div>
          </v-hover>
        </span>

        <v-sheet class="sheet2 rounded primary">
          <v-sheet class="sheet3 rounded" elevation="10">
            <v-sheet class="sheet4 rounded">
              <v-hover v-slot="{ hover }">
                <v-card class="hold on-hover" elevation="12">
                  <v-img :src="active.image">
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
                            <div
                              class="
                                text-center
                                pa-2 pa-sm-4
                                d-flex
                                justify-center
                                flex-column
                              "
                            >
                              <h6 class="mt-0 mt-sm-4 project_name">
                                {{ active.name }}
                              </h6>
                              <p
                                class="
                                  ma-0
                                  mb-2 mb-sm-5
                                  project_desc
                                  text-center
                                "
                              >
                                {{ active.description }}
                              </p>

                              <div class="stacks">
                                <h5
                                  class="
                                    text-subtitle-1
                                    font-weight-bold
                                    mb-0 mb-sm-4
                                  "
                                >
                                  Stacks
                                </h5>

                                <p class="text-subtitle-1 mb-0 mb-sm-4">
                                  {{ active.stacks }}
                                </p>
                              </div>

                              <div>
                                <v-btn small :href="active.link" color="success"
                                  >Visit site</v-btn
                                >
                              </div>
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
      <v-col class="text-center">
        <h3>
          Email for more
          <v-btn plain @click="$router.push('/contact')"
            ><v-icon> mdi-arrow-right</v-icon></v-btn
          >
        </h3></v-col
      >
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
          description:
            "Enjoy a more engaging and organized virtual learning, At SkillsGuruh, our mission is to help people build their capacity to be more, so we connect them with Knowledge, People and Opportunities everyday.",
          link: "https://skillsguruh.com",
          image: "/images/projects/skillsweb.png",
          stacks: "Laravel/PHP, Vue Js/Javascript, Mysql DB, Heroku, Github",
        },
        {
          name: "Commute Africa ",
          description:
            "Commute Taxi Limited; a subsidiary of Commute Africa is a public-transport service solutions provider with the aim of delivering convenient, efficient, secure and comfortable transport services through an online booking system.",
          link: "https://commuteafrica.africa",
          image: "/images/projects/commuteweb.png",
          stacks: "Laravel/PHP, Mysql DB, Github",
        },
        {
          name: "Karisoft",
          description:
            "A technology innovation company building custom software's with expertise in UI/UX, Web development, native application, AI and deep learning, cloud, and blockchain with a focus on recent and trending technologies.",
          link: "https://karisoft.io",
          image: "/images/projects/karisoftweb.png",
          stacks:
            "Node Js/Javascript, Vue Js/Javascript, Mysql DB, Heroku, Github",
        },
        {
          name: "Imo Ministry of Education",
          description: "Official Website for Ministry of Education, Imo State",
          link: "https://ministryofeducation.im.gov.ng/",
          image: "/images/projects/ministryweb.png",
          stacks: "Laravel/PHP, Vue Js/Javascript, Mysql DB, Github",
        },

        {
          name: "BizGuruh",
          description:
            "A powerful system that tracks your business profitability and growth in real time",
          link: "https://bizguruh.com",
          image: "/images/projects/bizguruhweb.png",
          stacks: "Laravel/PHP, Vue Js/Javascript, Mysql DB, Heroku, Github",
        },
        {
          name: "Automate",
          description:
            "Extend, optimize, and automate your most important processes with our employee management system that tracks your talent pipeline and engages employees.",
          link: "https://kari-soft.herokuapp.com/",
          image: "/images/projects/automateweb.png",
          stacks:
            "Node Js/Javascript, Vue Js/Javascript, Mysql DB, Heroku, Github",
        },

        {
          name: "LfaMarket",
          description: "A Global Financial service solution",
          link: "https://lfamarket.herokuapp.com",
          image: "/images/projects/lfaweb.png",
          stacks: "Node Js/Javascript, Javascript, Mongo DB, Github",
        },
        {
          name: "Karisoft Finance",
          description:
            "A Solution for Busy or Unskilled People Copy our trades from anywhere in the world and earn interest while you do nothing let us grow your funds for you.",
          link: "https://karisoft.finance",
          image: "/images/projects/karifinanceweb.png",
          stacks:
            "Node Js/Javascript, React Js/Javascript, Mysql DB, Heroku, Github",
        },

        {
          name: "IMSUBEB E-LEARNING",
          description:
            "IMSUBEB E-LEARNING is a secure and robust online portal for learning and collaboration. Multimedia learning resources, collaboration, monitoring & control mechanics, and many more extremely useful features all happen in this single shared digital space and can be accessed on the go.",
          link: "http://isl-center.herokuapp.com",
          image: "/images/projects/imolearningweb.png",
          stacks: "Laravel/PHP, Vue Js/Javascript, Mysql DB, Heroku, Github",
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
}
.sheet2 {
  position: relative;
  width: 46%;
  height: 44%;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
}
.sheet span {
  position: absolute;
  width: 250px;
  height: 140px;
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
  top: 10px;
  right: 10px;
}
.sheet span:nth-child(6) {
  top: 10px;
  left: 10px;
}
.sheet span:nth-child(7) {
  bottom: 10px;
  right: 10px;
}
.sheet span:nth-child(8) {
  bottom: 10px;
  left: 10px;
}
.sheet span:nth-child(9) {
  top: 25%;
  right: 15px;
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
  height: 98%;
  width: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.sheet4 {
  position: relative;
  width: 98%;
  height: 99%;
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
  opacity: 0.7;
}
.hold div:first-child {
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
  background: rgba(0, 0, 0, 0.6);
}
@media only screen and (max-width: 768px) {
  .project_name {
    font-size: 1rem;
    margin-bottom: 0px;
  }
  .project_desc {
    font-size: 0.9rem !important;
    line-height: 1.4;
  }
  .stacks h5,
  .stacks p {
    font-size: 0.9rem !important;
    line-height: 1.4;
  }
}
@media only screen and (max-width: 768px) {
  .sheet2 {
    width: 40%;
    height: 40%;
  }

  .sheet span {
    position: absolute;
    width: 25%;
    height: 10%;
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
    width: 85%;
    height: 220px;
  }

  .sheet span {
    width: 25%;
    height: 60px;
  }
  .sheet span:nth-child(1) {
    top: 15%;
  }
  .sheet span:nth-child(2) {
    bottom: 15%;
  }
  .sheet span:nth-child(3) {
    right: unset;
    top: 0;
  }
  .sheet span:nth-child(4) {
    left: unset;
    bottom: 1%;
  }
  .sheet span:nth-child(5) {
    top: 15%;
    right: 15px;
  }
  .sheet span:nth-child(6) {
    top: 15%;
    left: 15px;
  }
  .sheet span:nth-child(7) {
    bottom: 15%;
    right: 15px;
  }
  .sheet span:nth-child(8) {
    bottom: 15%;
    left: 15px;
  }
  .sheet span:nth-child(9) {
    top: unset;
    bottom: 1%;
    right: 20%;
  }
  .sheet span:nth-child(10) {
    bottom: 1%;
    left: 40%;
  }
  .sheet span:nth-child(11) {
    top: 0%;
    right: 20%;
  }
  .sheet span:nth-child(12) {
    top: 0%;
    left: 20%;
  }
  .sheet span:nth-child(13) {
    bottom: 27%;
    right: 20%;
  }
  .sheet span:nth-child(14) {
    left: 20%;
    bottom: 27%;
  }
  .project_name {
    font-size: 1rem;
    margin-bottom: 0px;
  }
  .project_desc {
    font-size: 0.7rem !important;
    line-height: 1.4;
  }
  .stacks h5,
  .stacks p {
    font-size: 0.7rem !important;
    line-height: 1.4;
  }
}
</style>