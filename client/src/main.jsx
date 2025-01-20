import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      position="bottom-center" // Default position for all toasts
      autoClose={3000} // Automatically close after 3 seconds
      hideProgressBar={false} // Show progress bar
      closeOnClick={true} // Close when clicked
      pauseOnHover={true} // Pause on hover
      draggable={true} // Allow drag to dismiss
      newestOnTop={true} // Show newest toast on top
    />
    <App />
  </StrictMode>
);
