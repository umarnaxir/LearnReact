import React, { useState } from 'react';

function UserPanel() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{isAdmin ? "Admin Dashboard" : "User Dashboard"}</h2>

      <button
        onClick={() => setIsAdmin(!isAdmin)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Switch to {isAdmin ? "User" : "Admin"}
      </button>
    </div>
  );
}

export default UserPanel;
