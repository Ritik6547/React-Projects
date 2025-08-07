import BalanceContainer from "./components/BalanceContainer";
import TransactionContainer from "./components/TransactionContainer";
import { calculateBalance } from "./utility/calculateBalance";
import { useTransactionContext } from "./context/useTransactionContext";
import { useEffect, useState } from "react";

const App = () => {
  const { transactions } = useTransactionContext();
  const [allBalance, setAllBalance] = useState({
    total: 0,
    income: 0,
    expense: 0,
  });

  useEffect(() => {
    setAllBalance(calculateBalance(transactions));
  }, [transactions]);

  return (
    <>
      <h1>Expense Tracker</h1>
      <BalanceContainer allBalance={allBalance} />
      <TransactionContainer />
    </>
  );
};

export default App;
