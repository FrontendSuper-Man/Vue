import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";

const routes = [{ path: "/", component: HeroView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
