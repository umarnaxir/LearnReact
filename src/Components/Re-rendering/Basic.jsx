import { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

const Child = () => {
  console.log("Child rendered");
  return <p>Hello</p>;
};

export default Parent;
