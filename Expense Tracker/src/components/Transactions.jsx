import TransactionItem from "./TransactionItem";
import { useTransactionContext } from "../context/useTransactionContext";

const Transactions = () => {
  const { transactions } = useTransactionContext();

  return (
    <div className="transaction-section">
      <h3>Transactions</h3>
      <ul className="transaction-list">
        {transactions.map((transaction) => {
          return (
            <TransactionItem
              id={transaction.id}
              key={transaction.id}
              name={transaction.desc}
              amount={transaction.amount}
              transactionClass={
                transaction.amount >= 0 ? "income-item" : "expense-item"
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Transactions;
