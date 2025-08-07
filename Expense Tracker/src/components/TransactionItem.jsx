import { formatAmount } from "../utility/formatAmount";
import { useTransactionContext } from "../context/useTransactionContext";

const TransactionItem = ({ transactionClass, name, amount, id }) => {
  const { transactions, setTransactions } = useTransactionContext();

  const handleDelete = () => {
    const filteredItems = transactions.filter((txn) => {
      return txn.id !== id;
    });
    setTransactions(filteredItems);
  };

  return (
    <li className={`transaction-item ${transactionClass}`}>
      <p>{name}</p>
      <p>{formatAmount(Number(amount))}</p>
      <i onClick={handleDelete} className="delete-btn fa-solid fa-xmark"></i>
    </li>
  );
};

export default TransactionItem;
