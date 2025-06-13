import React from 'react';
import User from '@/Components/Props/User';
function App() {
  return (
    <div>
      <h1>Props in React Js</h1>
      <hr></hr>
      <User name = "Umar" phone={7051732616} email={"umar@gmail.com"}/>
    </div>
  );
}

export default App;
