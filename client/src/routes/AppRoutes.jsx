import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
