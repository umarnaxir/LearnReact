import { useRef } from "react";
export function AccessElement(){
    const inputElem = useRef();
    const  btnClicked = () =>{
        console.log(inputElem.current);
        inputElem.current.style.background = "blue";
    }
    return(
        <div>
            <input type="text" ref={inputElem}/>
            <button onClick={btnClicked}>Click Here</button>

        </div>
    )
}