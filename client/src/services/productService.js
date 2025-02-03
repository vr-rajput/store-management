import httpClient from "./httpClient";

export const listMedicine = async (query, token) => { 
    const response = await httpClient.get("mgt/medicine", { params: query, headers: {Authorization: `Bearer ${token}`} });
    return response;
}

export const createMedicine = async (medicineData, token) => {
    return await httpClient.post("mgt/medicine", medicineData, {
        headers: {Authorization: `Bearer ${token}`}
    });

}