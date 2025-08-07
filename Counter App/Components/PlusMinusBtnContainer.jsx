import Button from "./Button";

const PlusMinusBtnContainer = ({ count, setCount, value, setError }) => {
  function minusBtn() {
    if (count - value >= 0) {
      setCount(count - value);
      setError("");
    } else {
      setError("Cannot go below zero");
    }
  }

  function plusBtn() {
    setCount(count + value);
    setError("");
  }

  return (
    <div className="plus-minus-btn-container">
      <Button onClick={minusBtn} btnClass="minus" content="-" />
      <Button onClick={plusBtn} btnClass="plus" content="+" />
    </div>
  );
};

export default PlusMinusBtnContainer;
