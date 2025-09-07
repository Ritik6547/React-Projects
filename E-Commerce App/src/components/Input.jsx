const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="w-full rounded border border-gray-300 px-3.5 py-1.5"
      placeholder={placeholder}
    />
  );
};

export default Input;
