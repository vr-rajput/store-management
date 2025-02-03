import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:3000", // Replace with your backend URL
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
