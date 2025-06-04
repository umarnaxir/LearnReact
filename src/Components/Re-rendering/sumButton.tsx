import React from "react";

function SumButton({ onSum }) {
  console.log("SumButton rendered");
  return <button onClick={() => onSum(2, 3)}>Sum 2 + 3</button>;
}

export default React.memo(SumButton);