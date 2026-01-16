import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import "./style.css";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import Particles from "particles.vue3";

const app = createApp(App);
app.use(ArcoVue);
app.use(router); //使用路由
app.mount("#app");
app.use(Particles); //粒子效果组件
