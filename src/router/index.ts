import { createRouter, createWebHistory } from "vue-router";
import login from "../components/login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "login",
    },
    { path: "/login", component: login },
  ],
});

//对外共享
export default router;
