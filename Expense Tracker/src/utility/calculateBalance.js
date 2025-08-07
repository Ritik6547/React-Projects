export function calculateBalance(transactions) {
  const income = transactions
    .filter((txn) => {
      return Number(txn.amount) >= 0;
    })
    .reduce((total, txn) => {
      return total + Number(txn.amount);
    }, 0);

  const expense = transactions
    .filter((txn) => {
      return Number(txn.amount) < 0;
    })
    .reduce((total, txn) => {
      return total + Number(txn.amount);
    }, 0);

  return { total: income + expense, income, expense };
}
