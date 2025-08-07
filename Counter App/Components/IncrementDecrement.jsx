const IncrementDecrement = ({ value, setValue }) => {
  function handleInput(e) {
    const inputvalue = e.target.value;

    if (inputvalue === "") {
      setValue("");
    } else {
      setValue(Number(inputvalue));
    }
  }

  return (
    <p className="increment-decrement">
      Increment/Decrement by:
      <input
        value={value}
        onChange={handleInput}
        className="number-input"
        type="number"></input>
    </p>
  );
};

export default IncrementDecrement;
