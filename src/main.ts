import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes/index";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(pinia);
app.use(router);

app.mount("#app");
