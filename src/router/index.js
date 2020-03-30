import Vue from "vue";
// import VueRouter from 'vue-router'

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

// Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: function() {
      return import(/* webpackChunkName: "home" */ "../views/Home.vue");
    }
  },
  {
    path: "/new",
    name: "New",
    component: function() {
      return import(/* webpackChunkName: "new" */ "../views/New.vue");
    }
  }
];

const router = new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
