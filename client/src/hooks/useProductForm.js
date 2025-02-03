import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";


export const useProductForm = ( initialState, submitMedicineApi ) => {
      const { adminDetail } = useContext(AdminContext);
      console.log("adminDetail: ", adminDetail);
 
    const [formData, setFormData] = useState(initialState); 
    const navigate =    useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReset = () => {
        setFormData( initialState );
    }

        const handleSubmit = async (e) => {
            console.log("hooks");
            e.preventDefault();
            // Call your API to add a new product (replace with actual logic)
            formData.storeName = adminDetail?.storeName
 
            const response = await submitMedicineApi( formData, adminDetail?.authToken );
            console.log("response: ", response);
            if ( response?.status == 201 ) {
                toast.success("created suceesful!");
                navigate("/product");
            } else {
                toast.error("Error occured!");                
            }
            // Navigate back to the product listing page after submission
          };

    return {
        formData,
        handleChange,
        handleReset,
        handleSubmit,
        adminDetail
    }
}