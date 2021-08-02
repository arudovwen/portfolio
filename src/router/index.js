import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboardHeader from "@/components/Navigation/dashboardHeader";
import Header from "@/components/Navigation/header";
import Footer from "@/components/Navigation/footer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: Header,
      default: Home,
    },
    meta: {
      title: "Home | Success Ahon",
    },
  },
  {
    path: "/about",
    name: "About",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    meta: {
      title: "About | Success Ahon",
    },
  },
  {
    path: "/projects",
    name: "Projects",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
    },
    meta: {
      title: "Projects | Success Ahon",
    },
  },
  {
    path: "/testimonials",
    name: "Testimonials",

    components: {
      header: Header,
      default: () =>
        import(
          /* webpackChunkName: "testimonials" */ "../views/Testimonials.vue"
        ),
    },
    meta: {
      title: "Testimonials | Success Ahon",
    },
  },
  {
    path: "/blog",
    name: "Blog",

    components: {
      header: Header,
      default: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
      footer: Footer,
    },
    meta: {
      title: "Blog | Success Ahon",
    },
  },
  {
    path: "/videos",
    name: "Videos Category",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "story" */ "@/components/videos.vue"),
      footer: Footer,
    },
    meta: {
      title: "Category | Blog",
    },
  },
  {
    path: "/stories",
    name: "Story Category",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "story" */ "@/components/story.vue"),
      footer: Footer,
    },
    meta: {
      title: "Category | Blog",
    },
  },
  {
    path: "/read/:title",
    name: "Read Story",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "read" */ "@/components/read.vue"),
      footer: Footer,
    },
    meta: {
      title: "Read | Blog",
    },
  },
  {
    path: "/watch/:title",
    name: "Watch",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "watch" */ "@/components/watch.vue"),
      footer: Footer,
    },
    meta: {
      title: "Watch | Blog",
    },
  },
  {
    path: "/contact",
    name: "Contact",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
      footer: Footer,
    },
    meta: {
      title: "Contact | Success Ahon",
    },
  },
  {
    path: "/authenticate",
    name: "Authenticate",

    components: {
      header: Header,
      default: () =>
        import(/* webpackChunkName: "login" */ "@/components/Auth/login.vue"),
    },
    meta: {
      title: "Authenticate | Arudovwen",
    },
  },

  {
    path: "/content/create",
    name: "Create content",

    components: {
      header: dashboardHeader,
      default: () =>
        import(
          /* webpackChunkName: "create" */ "@/components/creator/create.vue"
        ),
      footer: Footer,
    },
    meta: {
      title: "Create Content | Arudovwen",
      authRequired: true,
    },
  },
  {
    path: "/content/edit",
    name: "Edit content",

    components: {
      header: dashboardHeader,
      default: () =>
        import(/* webpackChunkName: "edit" */ "@/components/creator/edit.vue"),
      footer: Footer,
    },
    meta: {
      title: "Edit Content | Arudovwen",
      authRequired: true,
    },
  },
  {
    path: "/content/preview",
    name: " Content preview",

    components: {
      header: dashboardHeader,
      default: () =>
        import(
          /* webpackChunkName: "contentpreview" */ "@/components/creator/preview.vue"
        ),
      footer: Footer,
    },
    meta: {
      title: "Contents | Arudovwen",
      authRequired: true,
    },
  },
  {
    path: "/contents",
    name: " Contents",

    components: {
      header: dashboardHeader,
      default: () =>
        import(
          /* webpackChunkName: "content" */ "@/components/creator/contents.vue"
        ),
      footer: Footer,
    },
    meta: {
      title: "Contents | Arudovwen",
      authRequired: true,
    },
  },
  {
    path: "/dashboard",
    name: " Dashboard",

    components: {
      header: dashboardHeader,
      default: () =>
        import(
          /* webpackChunkName: "dashboard" */ "@/components/dashboard.vue"
        ),
      footer: Footer,
    },
    meta: {
      title: "Dashboard | Arudovwen",
      authRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes,
});
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router;
