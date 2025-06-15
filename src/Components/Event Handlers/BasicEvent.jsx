import { useState } from "react";
function BasicEvent() {
    const [name, setName] = useState("Umar");
    const handleClick = () =>{
        alert(`You clicked`);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <br />
        <br />
        <input type="text" value={name} onChange={handleChange} />
        <button onClick={() => alert(`Submitted name: ${name}`)}>Submit</button>
    </div>
  )
}

export default BasicEvent;