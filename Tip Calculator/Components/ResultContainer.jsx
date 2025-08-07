import Result from "./Result";

const ResultContainer = ({ tip, perPerson, total }) => {
  return (
    <div className="result-container">
      <Result resultText="Tip per Person:" resultClass="tip" amount={tip} />
      <Result
        resultText="Total per Person:"
        resultClass="total-per-person"
        amount={perPerson}
      />
      <Result
        resultText="Total Bill:"
        resultClass="total-bill"
        amount={total}
      />
    </div>
  );
};

export default ResultContainer;
