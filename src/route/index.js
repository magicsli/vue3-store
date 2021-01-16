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
      path: "/",
      name: "tabbar",
      redirect: '/home',
      component: () => import("/@/page/home/index.vue"),
      children: [
        {
          path: "/home",
          name: 'home',
          component: () => import("/@/page/home/component/home.vue")
        },
        {
          path: "/list",
          name: 'list',
          component: () => import("/@/page/home/component/list.vue")
        },
        {
          path: "/cart",
          name: 'cart',
          component: () => import("/@/page/home/component/cart.vue")
        },
        {
          path: "/user",
          name: 'user',
          component: () => import("/@/page/home/component/user.vue")
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
beforeEach(router);
export default router;
