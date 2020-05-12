import Vue from "vue";
import VueRouter from "vue-router";
import Skarb from "../views/skarb.vue";
import PageNotFound from "../views/notFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/skarb",
  },
  {
    path: "/skarb",
    name: "skarb",
    component: Skarb,
  },
  {
    path: "/skarb/:id",
    name: "team-details",
    component: () =>
      import(/* webpackChunkName: "teams" */ "../views/team-details.vue"),
    props: (r) => ({ id: parseInt(r.params.id) }),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue"),
  },
  {
    path: "*",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
