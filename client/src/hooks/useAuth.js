import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => useContext(AuthContext);

export const useForm = ( initialState, authApi ) => {
    const [ values, setValues ] = useState( initialState ); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value}));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle submit");
        console.log("initialState", initialState);

        //api call
        const response = await authApi( values);
        console.log("response: ", response);

        // console.log("response: ", response);


    }
    return {
        values,
        handleChange,
        handleSubmit     
    }
}
