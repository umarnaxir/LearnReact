import { useState, useEffect } from "react";

function TimeOut() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("refreshed");
  });

  return (
    <div>
      <h2>I have rendered {count} times!</h2>
    </div>
  );
}

export default TimeOut;
