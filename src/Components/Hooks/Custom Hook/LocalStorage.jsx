import React, { useState, useEffect } from "react";
const useLocalStorage = (key, initalValue) => {
    const [name, setName] = useState(
        localStorage.getItem(key) ?
        localStorage.getItem(key) : initalValue
    );
    useEffect(()=>{
        localStorage.setItem(key, name)
    }, [name, key])
    return(
        [name, setName]
    )

}
export default useLocalStorage;