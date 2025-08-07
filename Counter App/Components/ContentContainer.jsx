import { useState } from "react";
import Button from "./Button";
import IncrementDecrement from "./IncrementDecrement";
import PlusMinusBtnContainer from "./PlusMinusBtnContainer";

const ContentContainer = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const [error, setError] = useState("");

  function resetBtn() {
    setCount(0);
    setValue(1);
    setError("");
  }

  return (
    <div className="container">
      <p className="result">{count}</p>

      <PlusMinusBtnContainer
        count={count}
        setCount={setCount}
        value={value}
        setError={setError}
      />

      {error && <p className="err-message">{error}</p>}

      <IncrementDecrement value={value} setValue={setValue} />

      <Button onClick={resetBtn} btnClass="reset-btn" content="Reset" />
    </div>
  );
};

export default ContentContainer;
