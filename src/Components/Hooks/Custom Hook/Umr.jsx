"use client";
import React, { useState } from "react";
import useLocalStorageList from "../Custom Hook/useLocalStorage";

function NameList() {
  const [name, setName] = useState("");
  const [names, addName] = useLocalStorageList("names");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addName(name.trim());
      setName("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Stored Names:</h2>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
}

export default NameList;
