import httpClient from "./httpClient";

export const registerUser = async (userDetails) => {
    const response = await httpClient.post("/mgt/admin/register", userDetails);
    return response;
};

export const loginUser = async (userDetails) => {
    const response = await httpClient.post("/mgt/admin/login", userDetails);
    return response;
}
