import { createApp } from "vue";
import "./styles.css"
import App from "./App.vue";
import router from "./router/router.js";
import axios from "axios"

axios.defaults.baseURL = "https://www.bungie.net/Platform";
axios.defaults.headers.common["X-API-Key"] = import.meta.env.VITE_API_KEY;


createApp(App)
    .use(router)
    .mount("#app");
