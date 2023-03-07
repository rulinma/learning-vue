import Vue from "vue"; //引入 Vue
import VueRouter from "vue-router"; //引入 Vue 路由

Vue.use(VueRouter); //安装插件
const routes = [
  //配置默认的路径，默认显示登录页
  { path: "/", component: () => import("@/pages/Login/Login") },

  //配置登录成功页面，使用时需要使用 path 路径来实现跳转
  { path: "/success", component: () => import("@/pages/Login/Success") },

  //配置登录失败页面，使用时需要使用 path 路径来实现跳转
  {
    path: "/error",
    component: () => import("@/pages/Login/Error"),
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
