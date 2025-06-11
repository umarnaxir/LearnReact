import {useState } from "react";

function useLocalStorageList(key) {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const updatedList = [...items, item];
    setItems(updatedList);
    localStorage.setItem(key, JSON.stringify(updatedList));
  };

  return [items, addItem];
}

export default useLocalStorageList;
