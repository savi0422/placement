import React from "react";
import "./Navbar.css"; // Reuse your existing CSS

class NavigationMenu extends React.Component {
  render() {
    const { navigate } = this.props;
    
    return (
      <nav className="navbar">
        <h2 className="logo">PLACEMENT MANAGEMENT</h2>
        <ul className="nav-links">
          <li onClick={() => navigate("home")}>🏠 HomePage</li>
          <li onClick={() => navigate("notifications")}>🔔 Notifications</li>
          <li onClick={() => navigate("joblist")}>📋 JobList</li>
          <li onClick={() => navigate("dashboard")}>📊 Dashboard</li>
          <li onClick={() => navigate("login")}>🔑 Login</li>
          <li onClick={() => navigate("studentregistration")}>📌 Student Registration</li>
          <li onClick={() => navigate("studentdashboard")}>🎓 Student Dashboard</li>
          <li onClick={() => navigate("companies")}>🏢 Companies</li>
        </ul>
      </nav>
    );
  }
}

export default NavigationMenu;