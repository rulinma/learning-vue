import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";

// 所有组件相关的样式
import "@element-plus/theme-chalk/dist/index.css";
// 全局样式
import "./styles/index.scss";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.use(Vant);

app.mount("#app");
