import { useEffect, useState } from "react"
import { AdminContext } from "./AdminContext"
import { authUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AdminProvider = ( {children} ) => {
    console.log("provider");
    const [ adminDetail, setAdminDetail ] = useState(null);
    const navigate = useNavigate();
    const fetchAadminDetail = async ( ) => {
        try {
            console.log("called");
            let authToken = localStorage.getItem("authToken");
            if ( !authToken ) {
                navigate("/login");
            }
            let response = await authUser(authToken);
            console.log("response: ", response);
            console.log("response: ", response?.data?.data?.userName);
            setAdminDetail( {
                    authToken: authToken,
                    userName: response?.data?.data?.userName,
                    email: response?.data?.data?.email,
                    storeName: response?.data?.data?.storeName
                } );
        } catch (error) { 
            console.log("error: ", error);
            localStorage.removeItem("authToken");       
            navigate("/login")
        }
    }
    useEffect(() => {
        fetchAadminDetail();
 
    }, [])
    
    return (
        <AdminContext.Provider value={{ adminDetail, setAdminDetail}}>
            {children}
        </AdminContext.Provider>
    )
}