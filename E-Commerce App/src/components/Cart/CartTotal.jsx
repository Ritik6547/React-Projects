import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/slices/cartSlice";
import Title from "../Title";

const CartTotal = () => {
  const totalCartAmount = useSelector(selectCartTotal);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="mt-2 flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$ {totalCartAmount}.00</p>
        </div>
        <hr className="text-gray-400" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>$ 10.00</p>
        </div>
        <hr className="text-gray-400" />
        <div className="flex justify-between">
          <b>Total</b>
          <b>$ {totalCartAmount === 0 ? 0 : totalCartAmount + 10}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
