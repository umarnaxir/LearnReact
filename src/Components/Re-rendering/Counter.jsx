import { useState, useCallback } from "react";
import SumButton from "../Re-rendering/sumButton";
import MulButton from "../Re-rendering/MulButton";

function Counter() {
  const [count, setCount] = useState(0);

  const sum = useCallback((a, b) => {
    console.log("Sum is", a + b);
  }, []); 

  const mul = useCallback((a, b) => {
    console.log("Multiple is", a * b);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <SumButton onSum={sum} />
      <MulButton onMul={mul} />
    </div>
  );
}

export default Counter;
