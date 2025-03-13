import { createStore } from "vuex";
import links from "./links";
import goods from "./goods";
import bestSellers from "./bestsellers";
import coffee from "./coffee";

const store = createStore({
  modules: {
    links,
    goods,
    bestSellers,
    coffee,
  },
});

export default store;
