import { useState, useEffect } from "react";

function Increment() {
  const [count, setCount] = useState(0);

  const incre = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (count < 10) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearTimeout(timer); 
    }
  }, [count]); 

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={incre}>Update Value</button>
    </div>
  );
}

export default Increment;