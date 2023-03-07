import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const login = () => import("../pages/login/Login.vue");
const Welcome = () => import("../pages/home/welcome/Welcome.vue");
const Users = () => import("../pages/home/users/Users.vue");

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
