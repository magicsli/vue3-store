// 静态路由
export const staticRouter = [
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
    redirect: "/home",
    component: () => import("/@/page/home/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () => import("/@/page/home/component/home.vue"),
      },
      {
        path: "/list",
        name: "list",
        meta: {
          title: "列表",
        },
        component: () => import("/@/page/home/component/list.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        meta: {
          title: "购物车",
        },
        component: () => import("/@/page/home/component/cart.vue"),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "我的",
        },
        component: () => import("/@/page/home/component/user.vue"),
      },
    ],
  },
];

// 动态权限路由
export const activityRouter = [
  {
    path: "/chat",
    meta: {
      title: "聊天信息栏",
      hiddenNavgation: true,
    },
    name: "chat",
    component: () => import("/@/page/chat.vue"),
  },
];
