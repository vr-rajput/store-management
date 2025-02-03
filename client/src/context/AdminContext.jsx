import { createContext, useContext } from "react";

export const AdminContext = createContext();

export const useAdmin = () => {
  return useContext(AdminContext);
};