import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  selectCartItemsData,
  updateCartItemQuantity,
} from "../store/slices/cartSlice";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/Cart/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemsData = useSelector(selectCartItemsData);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartItemsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4 border-t border-b border-gray-300 py-4 text-gray-700 sm:grid-cols-[4fr_2fr_0.5fr]"
          >
            <div className="flex items-start gap-6">
              <img
                className="w-16 sm:w-20"
                src={item.image[0]}
                alt="product-img"
              />
              <div>
                <p className="text-xs font-medium sm:text-lg">{item.name}</p>
                <div className="mt-2 flex items-center gap-5">
                  <p>${item.price}</p>
                  <p className="border border-gray-400 bg-slate-50 px-2 sm:px-3 sm:py-1">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>

            <input
              value={item.quantity}
              onChange={(e) =>
                dispatch(
                  updateCartItemQuantity({
                    productId: item._id,
                    size: item.size,
                    quantity: e.target.value,
                  }),
                )
              }
              className="max-w-10 border border-gray-400 px-1 py-1 sm:max-w-20 sm:px-2"
              type="number"
              min={1}
            />
            <img
              onClick={() =>
                dispatch(
                  deleteCartItem({ productId: item._id, size: item.size }),
                )
              }
              className="mr-4 w-4 cursor-pointer sm:w-5"
              src={assets.bin_icon}
              alt="delete-icon"
            />
          </div>
        ))}
      </div>

      <div className="my-20 flex justify-end">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="my-8 cursor-pointer bg-black px-8 py-3 text-sm text-white"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
