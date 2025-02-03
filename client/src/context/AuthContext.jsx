import { createContext } from "react";
import { registerUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const register = async (userDetails) => {
        await registerUser(userDetails);
    };

    return (
        <AuthContext.Provider value={{ register }}>
            {children}
        </AuthContext.Provider>
    );
};
    