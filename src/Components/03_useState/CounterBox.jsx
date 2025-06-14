import React, { useState } from "react";

function CounterBox() {
  const [count, setCount] = useState(0);

  const incre = () => setCount(count + 1);
  const decre = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h3 className="counter-heading">COUNT: {count}</h3>
      <div className="button-group">
        <button className="counter-button" onClick={incre}>Increment</button>
        <button className="counter-button" onClick={decre}>Decrement</button>
        <button className="counter-button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default CounterBox;
