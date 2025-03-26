import React, { useState } from "react";
import "./Login.css";

const Login = ({ navigateTo }) => {
  const [role, setRole] = useState("student"); // Default role: Student
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState(""); // Admin Special Password

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (adminPassword === "Admin@123") {
        navigateTo("adminDashboard"); // Navigate to Admin Dashboard
      } else {
        alert("Invalid Admin Password! ❌");
      }
    } else {
      navigateTo("studentregistration"); // Navigate to Student Registration
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div className="input-group">
            <label>Login As</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="role-dropdown">
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Username or Email */}
          <div className="input-group">
            <label>Username or Email</label>
            <input 
              type="text" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
              placeholder="Enter your username or email" 
              required 
            />
          </div>

          {/* Password Field (Required for Both Roles) */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>

          {/* Admin Password Field (Only for Admins) */}
          {role === "admin" && (
            <div className="input-group">
              <label>Admin Secret Key 🔑</label>
              <input 
                type="password" 
                value={adminPassword} 
                onChange={(e) => setAdminPassword(e.target.value)} 
                placeholder="Enter Admin Password" 
                required 
              />
            </div>
          )}

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigateTo("studentregistration")} className="register-link">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
