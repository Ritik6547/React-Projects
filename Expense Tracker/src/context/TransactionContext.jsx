import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage("allTransaction", []);

  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
