import React, { useState } from 'react';

function ExtendedForm() {
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("India");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gender: ${gender}, Country: ${country}, Bio: ${bio}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h3>🌍 Extended Form</h3>

      <label>
        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
      </label>
      <label>
        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
      </label>
      <br /><br />

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <br /><br />

      <textarea
        placeholder="Write about yourself"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        rows="4"
        cols="30"
      />
      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ExtendedForm;
