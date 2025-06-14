import React, { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  let message;
  if (isLoggedIn) {
    message = <h2>Welcome back, Umar!</h2>;
  } else {
    message = <h2>Please log in</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      {message}
      <button
        onClick={handleLoginToggle}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default Greeting;
