import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const dummyLeads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", status: "New", source: "Website" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "2345678901", status: "Contacted", source: "Walk-in" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com", phone: "3456789012", status: "Converted", source: "Referral" },
  { id: 4, name: "Ava Johnson", email: "ava@example.com", phone: "4567890123", status: "Contacted", source: "Ad Campaign" },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const LeadManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLeads = dummyLeads.filter((lead) =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const leadStatusData = [
    { name: "New", value: dummyLeads.filter((l) => l.status === "New").length },
    { name: "Contacted", value: dummyLeads.filter((l) => l.status === "Contacted").length },
    { name: "Converted", value: dummyLeads.filter((l) => l.status === "Converted").length },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>HSR Motors - Lead Management</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "2rem",
          fontSize: "16px",
        }}
      />

      {/* Pie Chart */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <PieChart width={400} height={300}>
          <Pie
            data={leadStatusData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {leadStatusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Lead Table */}
      <table width="100%" border="1" cellPadding="12" style={{ borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.status}</td>
                <td>{lead.source}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No leads found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeadManagement;
