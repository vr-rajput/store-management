import { useEffect, useState } from "react"
import { listMedicine } from "../services/productService"

export const useDataTable = ( ) => {
    //use state declare
    //#region 
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState (""); 

    //#endregion
    //fetch data from api
    useEffect(() => {

        fetchData();
    }, [ setSearchTerm  ])


    const fetchData = async () => {
        const query = {
            storeName: "demo"
        }
        let response = await listMedicine(query); 
        setData(response?.data); 
    }

 
    return {
        data, 
        searchTerm,   
        setSearchTerm
    }
    
}