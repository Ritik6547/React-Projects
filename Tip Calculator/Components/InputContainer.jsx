const InputContainer = ({
  label,
  symbol = "",
  inputClass,
  onChange,
  value,
}) => {
  return (
    <div className="input-container">
      <p className="input-label">{symbol ? `${label} (${symbol})` : label}</p>
      <input
        onChange={onChange}
        type="number"
        className={`input-box ${inputClass}`}
        value={value}
      />
    </div>
  );
};

export default InputContainer;
