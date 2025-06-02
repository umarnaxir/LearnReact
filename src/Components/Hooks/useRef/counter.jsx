import { useState, useEffect, useRef } from "react";

export function Counter(){

    const [value, setValue] = useState(0)
    const count = useRef(10)
    console.log(count);

    useEffect(()=>{
        count.current = count.current + 1;
    });
    return(
        <>

        <button onClick={()=>{setValue(prev => prev - 1)}}> -1</button>
        <h2>{value}</h2>
        <button onClick={()=>{setValue(prev => prev + 1)}}> +1</button>
        <h2>Render Count: {count.current} </h2>

        </>
    )
}