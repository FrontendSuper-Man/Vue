import { createStore } from "vuex";
import links from "./links";
import items from "./items";

const store = createStore({
  modules: {
    links,
    items,
  },
});

export default store;
