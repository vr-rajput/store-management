import { useContext, useEffect, useState } from "react"
import { listMedicine } from "../services/productService"
import { AdminContext } from "../context/AdminContext";
import { LoaderContext } from "../context/LoaderContext";

export const useDataTable = ( ) => {
    //use state declare
    //#region 
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState ("");
    const [page, setPage] = useState(0);//table pagination start from 0
    const [limit, setLimit] = useState(5);
    const [pagination, setPegination] = useState(null);

      const { adminDetail } = useContext(AdminContext); 
      console.log("adminDetail: ", adminDetail);
      const { loading, setLoading } = useContext(LoaderContext); 
    

    //#endregion
    //fetch data from api
    useEffect(() => {

        fetchData();
    }, [ searchTerm, page  ])


    const fetchData = async () => { 
        console.log("loading", loading);
        setLoading(true);
        const query = {
            storeName: adminDetail?.storeName,
            // searchTerm: searchTerm,
            page: page +1,//table pagination start from 0
            limit: limit
        }
        if ( searchTerm !== "") {
            query.searchTerm = searchTerm;
        }
        const authToken = adminDetail?.authToken;
        let response = await listMedicine(query, authToken); 
        // console.log("response: ", response);
        console.log("response?.data?.data: ", response?.data);
        setData(response?.data?.data?.docs); 
        setPegination({
            totalDocs: response?.data?.data?.totalDocs,
            totalPages: response?.data?.data?.totalPages,
            currentPage: response?.data?.data?.currentPage,
            hasNextPage: response?.data?.data?.hasNextPage,
            hasPrevPage: response?.data?.data?.hasPrevPage
        })
        setLoading(false);
    }

 
    return {
        data, 
        searchTerm,  
        setSearchTerm,
        page,
        setPage,
        setLimit,
        limit,
        pagination,
        loading
    }
    
}