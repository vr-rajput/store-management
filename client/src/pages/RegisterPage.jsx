import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import RegisterForm from "../components/Auth/RegisterForm";

const RegisterPage = () => {
    const { register } = useContext(AuthContext);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formValues);
            alert("Registration successful!");
        } catch (error) {
            console.error("Registration failed:", error.message);
            alert("Registration failed. Please try again.");
        }
    };

    return <RegisterForm values={formValues} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default RegisterPage;
