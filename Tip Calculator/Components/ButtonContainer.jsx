import Button from "./Button";

const ButtonContainer = ({
  amount,
  percentage,
  people,
  error,
  setError,
  setTip,
  setPerPerson,
  setTotal,
  setAmount,
  setPercentage,
  setPeople,
}) => {
  function calculate() {
    if (
      amount.trim() === "" ||
      percentage.trim() === "" ||
      people.trim() === ""
    ) {
      setError("Enter valid values in all fields.");
      clearInputs();
      return;
    }

    const billAmount = Number(amount);
    const tipPercentage = Number(percentage);
    const numberOfpeople = Number(people);

    if (billAmount < 0 || tipPercentage < 0 || numberOfpeople < 0) {
      setError("values can't be negative");
      clearInputs();
      return;
    }

    setError("");

    const tipAmount = (billAmount * tipPercentage) / 100 / numberOfpeople;
    const totalAmount = billAmount + billAmount * (tipPercentage / 100);
    const perPersonAmount = totalAmount / numberOfpeople;

    setTip(Number(tipAmount.toFixed(2)));
    setPerPerson(Number(perPersonAmount.toFixed(2)));
    setTotal(Number(totalAmount.toFixed(2)));
  }

  function reset() {
    setError("");
    clearInputs();
    setTip(0);
    setPerPerson(0);
    setTotal(0);
  }

  function clearInputs() {
    setAmount("");
    setPercentage("");
    setPeople("");
  }

  return (
    <>
      {error && <p className="error-msg">{error}</p>}
      <div className="btn-container">
        <Button btnClass="calculate" btnName="Calculate" onClick={calculate} />
        <Button btnClass="reset" btnName="Reset" onClick={reset} />
      </div>
    </>
  );
};

export default ButtonContainer;
