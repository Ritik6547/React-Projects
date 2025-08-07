const Button = ({ btnClass, btnName, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {btnName}
    </button>
  );
};

export default Button;
