import axios from "axios";

const api = axios.create({
    baseURL: "/api/", //0 proxy vai lidar com essa URL
});

export default api;