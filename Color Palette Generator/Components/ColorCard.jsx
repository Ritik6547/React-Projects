import { useState } from "react";

const ColorCard = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    const text = `#${color}`;
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  }

  return (
    <div className="color-card">
      <div className="color" style={{ backgroundColor: `#${color}` }}></div>
      <div className="color-code">
        <p>#{color}</p>
        <i
          onClick={handleCopy}
          className={`fa-solid ${isCopied ? "fa-check" : "fa-copy"}`}></i>
      </div>
    </div>
  );
};

export default ColorCard;
