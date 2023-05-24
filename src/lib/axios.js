
import axios from "axios";
const $axios = axios.create({
    baseURL: "https://www.bungie.net/Platform",
    headers: {
        "X-API-Key": "02386ef384624f798956d6587f460533",
        'Accept': 'application/json',
    }
});

export default $axios;