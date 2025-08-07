const Button = ({ btnClass, btnName, onClick }) => {
  return (
    <button onClick={onClick} className={btnClass}>
      {btnName}
    </button>
  );
};

export default Button;
