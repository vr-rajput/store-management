import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { keyWord } from "../utils/keyword";

export const useAuth = () => useContext(AuthContext);

export const useForm = (initialState, authApi, actionType) => {
    const [values, setValues] = useState(initialState);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (passwordMismatch) {
            e.target.value === values.password && setPasswordMismatch(false);
        }
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            if (actionType === keyWord?.actionType?.register) {

                if (values?.password !== values?.confirm_password) {
                    setPasswordMismatch(true);
                    return
                }
            }
            //api call
            const response = await authApi(values); 
            if (response?.status === 201 && actionType === keyWord?.actionType?.register) {
                toast.success(response?.data?.message);
            } else if (response?.status === 200 && actionType === keyWord?.actionType?.login) {
                toast.success(response?.data?.message);
            } else {
                toast.error(keyWord?.generalErrMsg);
            }
            setValues(initialState);
            // console.log("response: ", response);
        } catch (error) {
            console.log("error: ", error);
            setValues(initialState);
            toast.error(keyWord?.generalErrMsg);
        }

    }
    return {
        values,
        handleChange,
        handleSubmit,
        passwordMismatch
    }
}
