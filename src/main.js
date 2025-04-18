import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store/index";
import "./assets/scss/style.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
// npm install json-server --save-dev в случае если json server не будет работать
