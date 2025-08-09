const Button = ({ label, roundedFull = "rounded-md", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer bg-[#A08FF8] px-6 py-2 font-semibold text-black ${roundedFull}`}
    >
      {label}
    </button>
  );
};

export default Button;
