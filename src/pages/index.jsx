import React from 'react';
import "../styles/Profile.css";
import styles from '../styles/Form.css';
import Form from '@/Components/Tasks/Form';
import NameList from '@/Components/Hooks/Custom Hook/NameList';
import Profile from '@/Components/Profile';
function App() {
  return (
    <div>
      {/* <Form/> */}
      <Profile />
      {/* <NameList/> */}
    </div>
  );
}

export default App;
