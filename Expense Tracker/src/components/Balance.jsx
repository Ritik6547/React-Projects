const Balance = ({ divClass, label, amountClass, amount }) => {
  return (
    <div className={`in-exp-box ${divClass}`}>
      <p>{label}</p>
      <h3>
        <span className={amountClass}>{amount}</span>
      </h3>
    </div>
  );
};

export default Balance;
