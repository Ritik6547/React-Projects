import { useEffect } from "react";

const Result = ({ resultText, resultClass, amount }) => {
  return (
    <div className="result">
      <p>{resultText}</p>
      <p className={resultClass}>₹{amount.toFixed(2)}</p>
    </div>
  );
};

useEffect(() => {
  console.log("Runs after every render");
}, []);

export default Result;
