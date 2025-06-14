import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}, Age: ${age}, Branch: ${branch}`);
    setName("");
    setAge("");
    setBranch("");
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "#f7f9fc",
      border: "2px solid #e1e4e8",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#2c3e50",
      marginBottom: "20px",
    },
    input: {
      width: "92%",
      padding: "10px 15px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#0066cc",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    previewTitle: {
      marginTop: "20px",
      fontWeight: "bold",
      color: "#34495e",
    },
    previewData: {
      fontSize: "18px",
      color: "#2c3e50",
      backgroundColor: "#ecf0f1",
      padding: "10px",
      borderRadius: "6px",
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Student Form Submission</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={styles.input}
      />

      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        style={styles.input}
      />

      <input
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        placeholder="Branch"
        style={styles.input}
      />

      <button onClick={handleSubmit} style={styles.button}>Submit</button>

      <p style={styles.previewTitle}>Live Preview:</p>
      <p style={styles.previewData}>{name} | {age} | {branch}</p>
    </div>
  );
}

export default Form;
