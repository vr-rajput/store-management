import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/DashboardPage";
import ProductPage from "../pages/ProductPage";
import SalesPage from "../pages/SalesPage";
import Layout from "../layouts/layout";
import OrderPage from "../pages/OrderPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/dashboard" element={< Dashboard/>} /> */}
                <Route path="/" element = { <Layout/> }>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="product" element={<ProductPage/>}/>
                    <Route path="orders" element={<OrderPage/>}/>
                </Route>
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
