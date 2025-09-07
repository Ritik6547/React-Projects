import { useState } from "react";
import { assets } from "../assets/assets.js";
import CartTotal from "../components/Cart/CartTotal.jsx";
import Input from "../components/Input.jsx";
import PaymentMethod from "../components/PlaceOrder/PaymentMethod.jsx";
import Title from "../components/Title.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice.js";
import { placeOrder } from "../store/slices/ordersSlice.js";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const cartItems = useSelector(selectCartItems);
  const totalCartAmount = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(placeOrder({ items: cartItems, method, total: totalCartAmount }));
    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t pt-5 sm:flex-row sm:pt-14">
      {/* Left Side */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="my-3 text-xl sm:text-2xl">
          <Title text1={"DELIVERY "} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <Input type={"text"} placeholder={"First Name"} />
          <Input type={"text"} placeholder={"Last Name"} />
        </div>
        <Input type={"email"} placeholder={"Email address"} />
        <Input type={"text"} placeholder={"Street"} />
        <div className="flex gap-3">
          <Input type={"text"} placeholder={"City"} />
          <Input type={"text"} placeholder={"State"} />
        </div>
        <div className="flex gap-3">
          <Input type={"number"} placeholder={"Zipcode"} />
          <Input type={"text"} placeholder={"Country"} />
        </div>
        <Input type={"number"} placeholder={"Phone"} />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <PaymentMethod
              onClick={() => setMethod("stripe")}
              img={assets.stripe_logo}
              method={method}
              name="stripe"
            />
            <PaymentMethod
              onClick={() => setMethod("razorpay")}
              img={assets.razorpay_logo}
              method={method}
              name="razorpay"
            />
            <PaymentMethod
              onClick={() => setMethod("cod")}
              methodText="CASH ON DELIVERY"
              method={method}
              name="cod"
            />
          </div>

          <div className="mt-8 w-full text-end">
            <button
              onClick={handlePlaceOrder}
              className="cursor-pointer bg-black px-16 py-3 text-sm text-white"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
