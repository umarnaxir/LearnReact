import React from 'react';
import basic, { HelloWorld } from '../Components/basic.jsx';
function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      <style>
        {`
          h1 {
            color: blue;
          }
          p {
            font-size: 18px;
            color: green;
          }
            
        `}
      </style>
      <HelloWorld />
    </div>
  );
}

export default App;
