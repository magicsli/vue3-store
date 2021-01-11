import { createRouter, createWebHistory } from "vue-router";
import beforeEach from "./beforeEach";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      meta: {},
      name: "login",
      component: () => import("/@/page/login.vue"),
    },
    {
      path: "/register",
      meta: {},
      name: "register",
      component: () => import("/@/page/register.vue"),
    },
    {
      path: "/tabbar",
      name: "tabbar",
      component: () => import("/@/page/home/index.vue"),
    },
    {
      path: "/",
      redirect: "/tabbar",
    },
  ],
});
beforeEach(router);
export default router;
