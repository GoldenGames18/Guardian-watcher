import { createApp } from "vue";
import "./styles.css"
import App from "./App.vue";
import router from "./router/router.js";
import VueAxios from "vue-axios";
import $axios from "./lib/axios.js";


createApp(App)
    .use(VueAxios, $axios)
    .use(router)
    .mount("#app");
