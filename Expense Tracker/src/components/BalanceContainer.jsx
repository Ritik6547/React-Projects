import { formatAmount } from "../utility/formatAmount";
import Balance from "./Balance";

const BalanceContainer = ({ allBalance }) => {
  return (
    <div className="balance-container">
      <div className="balance">
        <p>Your Balance</p>
        <h2>
          <span className="main-balance">{formatAmount(allBalance.total)}</span>
        </h2>
      </div>
      <div className="income-expense-container">
        <Balance
          divClass="income"
          label="Income"
          amountClass="income-amount"
          amount={formatAmount(allBalance.income)}
        />
        <Balance
          divClass="expense"
          label="Expense"
          amountClass="expense-amount"
          amount={formatAmount(allBalance.expense)}
        />
      </div>
    </div>
  );
};

export default BalanceContainer;
