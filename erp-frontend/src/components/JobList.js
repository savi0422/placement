import { useState } from "react";
import "./JobList.css";

export default function JobList({ navigateTo }) {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "Google", location: "New York", status: "Open" },
    { id: 2, title: "Frontend Developer", company: "Facebook", location: "San Francisco", status: "Closed" },
  ]);
  const [newJob, setNewJob] = useState({ title: "", company: "", location: "", status: "Open" });
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addJob = () => {
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setNewJob({ title: "", company: "", location: "", status: "Open" });
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`admin-dashboard ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => navigateTo("dashboard")}> Dashboard</li>
          <li onClick={() => navigateTo("companies")} style={{ cursor: "pointer", color: "white" }}>
            Companies
          </li>
          <li>Applicants</li>
        </ul>
        <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="dashboard-title">Job Management</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="job-form">
          <input type="text" placeholder="Job Title" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
          <input type="text" placeholder="Company" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
          <input type="text" placeholder="Location" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
          <button className="add-job-btn" onClick={addJob}>Add Job</button>
        </div>

        <table className="job-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>
                  <span className={job.status === "Open" ? "status-open" : "status-closed"}>{job.status}</span>
                </td>
                <td>
                  <button className="delete-btn" onClick={() => deleteJob(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
