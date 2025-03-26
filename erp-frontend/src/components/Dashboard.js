import { useState } from "react";
import NotificationPage from "./NotificationPage";
import StudentDashboard from "./StudentDashboard"; // Import StudentDashboard
import "./Dashboard.css";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [info, setInfo] = useState("");
  const [view, setView] = useState("dashboard"); // Track current view

  // Function to navigate between views
  const goToNotifications = () => setView("notifications");
  const goToStudentDashboard = () => setView("studentDashboard");
  const goBackToDashboard = () => setView("dashboard");

  return (
    <div className="dashboard-container">
      {/* Conditionally Render Views */}
      {view === "notifications" ? (
        <NotificationPage goBack={goBackToDashboard} />
      ) : view === "studentDashboard" ? (
        <StudentDashboard goBack={goBackToDashboard} />
      ) : (
        <>
          {/* Sidebar */}
          <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? "☰" : "✖"}
            </button>
            <ul>
              <li>Jobs</li>
              <li onClick={goToStudentDashboard} style={{ cursor: "pointer", color: "white" }}>
                Student Profile
              </li>
              <li onClick={goToNotifications} style={{ cursor: "pointer", color: "white" }}>
                Notifications
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <h1 className="title">Placement Dashboard</h1>

            <div className="cards-container">
              <div className="card">
                <h2 className="card-title">Total Students</h2>
                <p className="card-value">500</p>
                <button className="info-btn" onClick={() => setInfo("Total number of students registered in the placement cell.")}>View Details</button>
              </div>
              <div className="card">
                <h2 className="card-title">Placed Students</h2>
                <p className="card-value">350</p>
                <button className="info-btn" onClick={() => setInfo("Number of students successfully placed in companies.")}>View Details</button>
              </div>
              <div className="card">
                <h2 className="card-title">Companies</h2>
                <p className="card-value">50</p>
                <button className="info-btn" onClick={() => setInfo("Total number of companies that have visited for placements.")}>View Details</button>
              </div>
            </div>

            {/* Info Display */}
            {info && <div className="info-box"><p>{info}</p></div>}
          </div>
        </>
      )}
    </div>
  );
}