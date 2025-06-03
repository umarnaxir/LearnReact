import React from "react";
import useLocalStorage from "../Custom Hook/LocalStorage";

function Custom(){
    const [name, setName] = useLocalStorage('username', '');
    return(
        <>
        <input type="text" placeholder="Enter Your Name"
        value={name} onChange={(e)=> setName (e.target.value)}/>
        <h1>Hello, {name}!</h1>
        </>
    );
}
export default Custom;