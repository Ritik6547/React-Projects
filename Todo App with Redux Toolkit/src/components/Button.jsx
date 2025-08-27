const Button = ({ btnClass, activeClass = "", label, onClick }) => {
  return (
    <span onClick={onClick} className={`btn ${btnClass} ${activeClass}`}>
      {label}
    </span>
  );
};

export default Button;
