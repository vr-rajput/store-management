import httpClient from "./httpClient";

export const registerUser = async (userDetails) => {
    const response = await httpClient.post("/mgt/admin/registration", userDetails);
    return response.data;
};

export const loginUser = async (userDetails) => {
    const response = await httpClient.post("/mgt/admin/registration", userDetails);
    return response.data;
}
