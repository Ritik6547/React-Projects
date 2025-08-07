import { useState } from "react";
import { initLocalStorage } from "../utils/initLocalStorage";

export const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(() => initLocalStorage(key, initialData));

  const updateLocalStorage = (newData) => {
    const valueToStore =
      typeof newData === "function" ? newData(data) : newData;
    localStorage.setItem(key, JSON.stringify(valueToStore));
    setData(valueToStore);
  };

  return [data, updateLocalStorage];
};
