import { local } from "./httpClient";

export const checkout = async (userDetails) => {
    const response = await local.post("/mgt/create-order", userDetails);
    return response;
};
export const checkoutVerify = async (userDetails) => {
    const response = await local.post("/mgt/verify", userDetails);
    return response;
};
