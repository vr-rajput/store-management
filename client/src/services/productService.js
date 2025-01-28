import httpClient from "./httpClient";

export const listMedicine = async ( query ) => { 
    const response = await httpClient.get("mgt/medicine", { params: query} );
    return response;
}