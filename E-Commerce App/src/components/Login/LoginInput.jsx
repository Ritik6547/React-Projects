const LoginInput = ({ type, placeholder }) => {
  return (
    <input
      className="w-full border border-gray-800 px-3 py-2"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default LoginInput;
