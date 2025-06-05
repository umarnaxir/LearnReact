import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0); 

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
}

export default Count;
