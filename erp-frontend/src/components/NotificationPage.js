import { useState } from "react";
import "./NotificationPage.css";

const NotificationPage = ({ goBack }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New job posting available!", read: false },
    { id: 2, message: "Your application was viewed.", read: true },
    { id: 3, message: "Upcoming placement drive on 25th March.", read: false }
  ]);

  // Function to mark notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="container">
      <h1 className="heading">📢 Notifications</h1>

      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications.</p>
      ) : (
        notifications.map((notif) => (
          <div key={notif.id} className={notif.read ? "read-card" : "unread-card"}>
            <p>{notif.message}</p>
            {!notif.read && (
              <button className="button" onClick={() => markAsRead(notif.id)}>
                ✅ Mark as Read
              </button>
            )}
          </div>
        ))
      )}

      {/* ✅ Back to Dashboard Button */}
      <button
        onClick={goBack}
        className="back-link"
        style={{
          padding: "10px 15px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        ⬅ Go Back to Dashboard
      </button>
    </div>
  );
};

export default NotificationPage;
