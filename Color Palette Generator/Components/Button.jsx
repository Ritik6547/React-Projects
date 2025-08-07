const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      <i className="fa-solid fa-rotate"></i> Generate Palette
    </button>
  );
};

export default Button;
