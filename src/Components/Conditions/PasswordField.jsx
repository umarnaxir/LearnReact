import React, { useState } from 'react';

function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ width: "300px", margin: "auto", padding: "20px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
        style={{
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "108%"
        }}
      >
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default PasswordToggle;
