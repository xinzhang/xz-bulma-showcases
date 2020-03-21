import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Tesla from "./components/Tesla";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/main", component: Main },
  { path: "/blog", component: Blog },
  { path: "/tesla", component: Tesla }
];

const router = new VueRouter({
  routes
});

export default router;
