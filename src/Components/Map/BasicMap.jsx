import React from "react";
function BasicMap(){
    const students = ['umar', 'khalid', 'owais',];
return(
    <div>
        <h3>Name List</h3>
        {
            students.map((data) => 
                <li>My Name is {data}</li>
        )
        }
    </div>
)
}
export default BasicMap;