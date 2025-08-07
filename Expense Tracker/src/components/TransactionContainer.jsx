import TransactionForm from "./TransactionForm";
import Transactions from "./Transactions";

const TransactionContainer = () => {
  return (
    <div className="transaction-container">
      <Transactions />
      <TransactionForm />
    </div>
  );
};

export default TransactionContainer;
