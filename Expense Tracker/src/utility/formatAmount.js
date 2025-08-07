export function formatAmount(amount) {
  const absAmount = Math.abs(amount);
  const formatted = absAmount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return amount < 0 ? `-$${formatted}` : `$${formatted}`;
}
