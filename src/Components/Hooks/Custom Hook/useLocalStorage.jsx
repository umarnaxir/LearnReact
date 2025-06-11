import { useEffect, useState } from "react";

function useLocalStorageList(key) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (err) {
      console.error("Failed to parse localStorage list", err);
    }
  }, [key]);

  const addItem = (item) => {
    const updatedList = [...items, item];
    setItems(updatedList);
    localStorage.setItem(key, JSON.stringify(updatedList));
  };

  return [items, addItem];
}

export default useLocalStorageList;
