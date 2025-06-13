import React from 'react';
import User from '@/Components/Props/User';
function App() {
  let object1 = {
    name: "Umar Nazir",
    phone: 7051732616,
    email: "umar@gmail.com"
  };
  let object2 = {
    name: "Syed Owais",
    phone: 1234567890,
    email: "owais@gmail.com"
  };
  let object3 = {
    name: "Khalid Jan",
    phone: 987654321,
    email: "khalid@gmail.com"
  };
  return (
    <div>
      <h1>Props in React Js</h1>
      <hr></hr>
      <User User={object1} />
      <User User={object2} />
      <User User={object3} />
      {/* <User name = "Umar" phone={7051732616} email={"umar@gmail.com"}/> */}
    </div>
  );
}

export default App;
