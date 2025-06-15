import { useState } from "react";
function BasicEvent() {
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        alert(`You clicked`);
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <br />
        <br />
        <input type="text" />
    </div>
  )
}

export default BasicEvent;