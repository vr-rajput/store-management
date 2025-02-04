import { useContext, useState } from "react";
import { toast } from "react-toastify"; 
import { keyWord } from "../utils/keyword";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

// export const useAuth = () => useContext(AuthContext);

export const useForm = (initialState, authApi, actionType) => {
    const { setAdminDetail, adminDetail } = useContext(AdminContext);
    console.log("adminDetail: auth hook", adminDetail);

    const [values, setValues] = useState(initialState);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const navigate = useNavigate();

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
            console.log("response?.data?: ", response?.data);
            if (response?.data?.status === "Success" && actionType === keyWord?.actionType?.register) {
                toast.success(response?.data?.message);
                localStorage.setItem("authToken", response?.data?.data?.token);
                setAdminDetail({
                    authToken: response?.data?.data?.token,
                    userName: response?.data?.data?.user?.userName,
                    email: response?.data?.data?.user?.email,
                    storeName: response?.data?.data?.user?.storeName
                })
                navigate("/dashboard");
            } else if (response?.data?.status === "Success" && actionType === keyWord?.actionType?.login) {
                toast.success(response?.data?.message);
                localStorage.setItem("authToken", response?.data?.data?.token);
                setAdminDetail({
                    authToken: response?.data?.data?.token,
                    userName: response?.data?.data?.user?.userName,
                    email: response?.data?.data?.user?.email,
                    storeName: response?.data?.data?.user?.storeName
                })
                navigate("/dashboard");
            } else if ( response?.data?.status === "Error" ) {
                toast.success(response?.data?.message);
            } else {
                toast.error(keyWord?.generalErrMsg);
            }
            setValues(initialState);
            // console.log("response: ", response);
        } catch (error) { 
            setValues(initialState);
            if ( error?.response ) {
                toast.error(error?.response?.data?.message);
            } else {
                toast.error(keyWord?.generalErrMsg);
            }
        }

    }
    return {
        values,
        handleChange,
        handleSubmit,
        passwordMismatch
    }
}
