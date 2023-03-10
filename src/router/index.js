import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Layout from "@/layout";

const login = () => import("../pages/login/Login.vue");
const Welcome = () => import("../pages/home/welcome/Welcome.vue");
const Users = () => import("../pages/home/users/Users.vue");
const Menus = () => import("../pages/home/menus/Menus.vue");

const routes = [
  //配置默认的路径，默认显示登录页
  { path: "/login", component: login },
  { path: "/success", component: () => import("../pages/login/Success.vue") },
  { path: "/error", component: () => import("../pages/login/Error.vue") },
  { path: "/user", component: () => import("../pages/user/User.vue") },
  { path: "/hello", component: () => import("../components/HelloWorld.vue") },
  { path: "/", redirect: "/hello" },
  {
    path: "/home",
    component: () => import("../pages/home/Home.vue"),
    children: [
      {
        path: "/welcome",
        component: Welcome,
      },
      {
        path: "/users",
        component: Users,
      },
    ],
  },
  {
    path: "/menus",
    component: Menus,
    children: [
      {
        path: "/welcome",
        component: Welcome,
      },
      {
        path: "/users",
        component: Users,
      },
    ],
  },
  {
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "/welcome2",
        component: Welcome,
      },
      {
        path: "/users2",
        component: Users,
      },
    ],
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("to ", to, " from ", from);
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next();
});

router.afterEach((to, from) => {
  // console.log(to, from)
  console.log("afterEach");
});

export default router;
