import { useState } from "react";

export default function StudentDashboard() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    department: "Computer Science",
    linkedIn: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    skills: "JavaScript, React, Node.js",
    experience: "2",
    education: "B.Tech in CSE, XYZ University, 2023",
    projects: "Job Portal, E-commerce Website",
    certifications: "AWS Certified, Full Stack Developer Bootcamp",
    resumeUploaded: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  // Open the modal and copy current profile data
  const openModal = () => {
    setUpdatedProfile({ ...profile });
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle profile updates inside the modal
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Save changes and update the main profile
  const handleSaveChanges = () => {
    setProfile(updatedProfile);
    closeModal();
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Student Dashboard</h1>

        {/* Profile Card */}
        <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "32px", color: "#3b82f6" }}>👤</div>
          <div>
            <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{profile.name}</h2>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>{profile.email}</p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>{profile.department}</p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Resume: {profile.resumeUploaded ? "✅ Uploaded" : "❌ Not uploaded"}
            </p>
            <button
              onClick={openModal}
              style={{ marginTop: "8px", padding: "6px 12px", border: "1px solid #3b82f6", backgroundColor: "white", color: "#3b82f6", borderRadius: "4px", cursor: "pointer" }}
            >
              Update Profile
            </button>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {/* Upcoming Interviews */}
          <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "24px", color: "#10b981" }}>💼</div>
            <div>
              <h3 style={{ fontWeight: "600" }}>Upcoming Interviews</h3>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>2 scheduled interviews</p>
            </div>
          </div>

          {/* Notifications */}
          <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "24px", color: "#f59e0b" }}>🔔</div>
            <div>
              <h3 style={{ fontWeight: "600" }}>Notifications</h3>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>3 new updates</p>
            </div>
          </div>

          {/* Resume Upload */}
          <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "24px", color: "#ef4444" }}>📄</div>
            <div>
              <h3 style={{ fontWeight: "600" }}>Resume Upload</h3>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                {profile.resumeUploaded ? "Uploaded" : "Not uploaded"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Modal */}
      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}>
            <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Update Profile</h2>
            
            <label>Name:</label>
            <input type="text" name="name" value={updatedProfile.name} onChange={handleChange} style={{ width: "100%", padding: "6px", marginBottom: "8px" }} />

            <label>Email:</label>
            <input type="email" name="email" value={updatedProfile.email} onChange={handleChange} style={{ width: "100%", padding: "6px", marginBottom: "8px" }} />

            <label>Department:</label>
            <input type="text" name="department" value={updatedProfile.department} onChange={handleChange} style={{ width: "100%", padding: "6px", marginBottom: "8px" }} />

            <label>
              <input type="checkbox" name="resumeUploaded" checked={updatedProfile.resumeUploaded} onChange={handleChange} />
              Resume Uploaded
            </label>

            <div style={{ marginTop: "12px", display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleSaveChanges} style={{ padding: "6px 12px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Save Changes
              </button>
              <button onClick={closeModal} style={{ padding: "6px 12px", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
