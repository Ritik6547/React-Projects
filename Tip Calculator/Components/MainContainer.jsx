import { useState } from "react";
import ButtonContainer from "./ButtonContainer.jsx";
import InputContainer from "./InputContainer.jsx";
import ResultContainer from "./ResultContainer.jsx";

const MainContainer = () => {
  const [amount, setAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [people, setPeople] = useState("");

  const [error, setError] = useState("");

  const [tip, setTip] = useState(0);
  const [perPerson, setPerPerson] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <main className="container">
      <h3>Tip Calculator</h3>
      <InputContainer
        label="Bill Amount"
        symbol="₹"
        inputClass="bill-amount"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <InputContainer
        label="Tip percentage"
        symbol="%"
        inputClass="tip-percentage"
        onChange={(e) => setPercentage(e.target.value)}
        value={percentage}
      />

      <InputContainer
        label="Number of People"
        inputClass="people"
        onChange={(e) => setPeople(e.target.value)}
        value={people}
      />

      <ButtonContainer
        amount={amount}
        percentage={percentage}
        people={people}
        error={error}
        setError={setError}
        setTip={setTip}
        setPerPerson={setPerPerson}
        setTotal={setTotal}
        setAmount={setAmount}
        setPercentage={setPercentage}
        setPeople={setPeople}
      />
      <ResultContainer tip={tip} perPerson={perPerson} total={total} />
    </main>
  );
};

export default MainContainer;
