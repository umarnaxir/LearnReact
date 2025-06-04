import React from "react";

function MulButton({ onMul }) {
  console.log("MulButton rendered");
  return <button onClick={() => onMul(4, 5)}>Mul 4 * 5</button>;
}

export default React.memo(MulButton); 