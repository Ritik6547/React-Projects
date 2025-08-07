const InputBox = ({ placeholder, onChange, value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="input-box"
      placeholder={placeholder}
    />
  );
};

export default InputBox;
