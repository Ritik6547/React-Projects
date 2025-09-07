const PaymentMethod = ({
  img = "",
  methodText = "",
  onClick,
  method,
  name,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center gap-3 border p-2 px-3 text-gray-300"
    >
      <p
        className={`h-3.5 min-w-3.5 rounded-full border ${method === name && "bg-green-400"}`}
      ></p>
      {img ? (
        <img className="mx-4 h-5" src={img} alt="payment-logo" />
      ) : (
        <p className="mx-4 text-sm font-medium text-gray-500">{methodText}</p>
      )}
    </div>
  );
};

export default PaymentMethod;
