import { useState, useEffect } from "react";

function TimeOut() {
  const [count, setCount] = useState(0);

  const incre = () => setCount(count + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);

  });

  useEffect(() => {
    console.log("refreshed");
  },[]);

  return (
    <div>
      <h2>I have rendered {count} times!</h2>
      <h3>count: {count}</h3>
      <button onClick={incre}>On/Off</button>
    </div>
  );
}

export default TimeOut;
