import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const login = () => import("../pages/Login/Login.vue");

const routes = [
  //配置默认的路径，默认显示登录页
  { path: "/login", component: login },
  { path: "/success", component: () => import("../pages/Login/Success.vue") },
  { path: "/error", component: () => import("../pages/Login/Error.vue") },
  { path: "/user", component: () => import("../pages/User/User.vue") },
  { path: "/", redirect: "/login" },
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
