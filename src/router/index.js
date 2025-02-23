import { createRouter, createWebHistory } from "vue-router";
import HeroView from "../views/HeroView.vue";
import OurCoffeeView from "../views/OurCoffeeView.vue";
import PleasureComponent from "../views/PleasureComponent.vue";
import ContactsComponent from "../views/ContactsComponent.vue";

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/goodspage", component: PleasureComponent },
  { path: "/contacts", component: ContactsComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
