import React from "react";

function Button({ label, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
