import axios from "axios";
import config from "../config.json";

const httpClient = axios.create({
    baseURL: config?.URL, // Replace with your backend URL
    headers: {
        "Content-Type": "application/json",
    },
});
export const local = axios.create({
    baseURL: "https://sq6fj1n9-3000.inc1.devtunnels.ms", // Replace with your backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpClient;
