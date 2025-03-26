import { useState, useEffect } from "react";
import "./companies.css";

export default function Companies() {
  const [companies, setCompanies] = useState([
    { id: 1, name: "Google", location: "California", employees: 100000, industry: "Tech" },
    { id: 2, name: "Facebook", location: "San Francisco", employees: 58000, industry: "Social Media" },
    { id: 3, name: "Amazon", location: "Seattle", employees: 1300000, industry: "E-commerce" }
  ]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    // Get new company data from localStorage
    const storedCompany = localStorage.getItem("newCompany");
    if (storedCompany) {
      const newCompany = JSON.parse(storedCompany);
      setCompanies((prev) => [...prev, newCompany]);
      localStorage.removeItem("newCompany"); // Clear it after adding
    }
  }, []);

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(search.toLowerCase()) ||
      company.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="companies-container">
      <h1 className="page-title">Companies Management</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Companies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="company-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Industry</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {filteredCompanies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.location}</td>
              <td>{company.industry}</td>
              <td>{company.employees.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
