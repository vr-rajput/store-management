import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Function to get page title dynamically based on route
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/product":
        return "Product";
      case "/orders":
        return "Orders";
      default:
        return "Welcome";
    }
  };

  return (
    <div className="layout">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <h2>Store Name</h2>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content (Remaining Width) */}
      <div className="content-area">
        {/* Top Navigation Bar */}
        <header className="navbar">
          <div className="navbar-left">
            <h3>{getPageTitle()}</h3>
          </div>
          <div className="navbar-right">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-photo"
            />
            <span className="user-name">John Doe</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
