import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h3>📝 Simple Form</h3>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px", display: "block" }}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px", display: "block" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>Submit</button>
    </form>
  );
}

export default SimpleForm;
