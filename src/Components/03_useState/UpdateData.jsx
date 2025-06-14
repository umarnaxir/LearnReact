import { useState } from "react";
function UpdateData() {
  const [data, setData] = useState("My Name Is");
  function updateData() {
    setData("Umar Nazir");
  }
  return (
    <div className="update-container">
      <h1 className="update-heading">{data}</h1>
      <button className="update-button" onClick={updateData}>
        Check Name
      </button>
    </div>
  );
}

export default UpdateData;
