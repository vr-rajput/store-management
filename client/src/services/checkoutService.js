import httpClient, { local } from "./httpClient";

export const checkout = async (userDetails, authToken) => {
    const response = await httpClient.post("/mgt/create-order", userDetails, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return response;
};
export const checkoutVerify = async (userDetails, authToken) => {
    const response = await httpClient.post("/mgt/verify", userDetails, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return response;
};
