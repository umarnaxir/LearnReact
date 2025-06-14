import React, { useState } from 'react';

function ShowMessage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>

      {/* ✅ Only renders if `show` is true */}
      {show && <p style={{ color: "green" }}>✔️ This is a conditional message!</p>}
    </div>
  );
}

export default ShowMessage;
