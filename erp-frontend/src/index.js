import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from React 18
import "./index.css"; // Ensure this file exists
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
