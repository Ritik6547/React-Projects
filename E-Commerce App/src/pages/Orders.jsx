import { useSelector } from "react-redux";
import { selectOrdersData } from "../store/slices/ordersSlice";
import Title from "../components/Title";
import { formatDate } from "../utils/formatDate";

const Orders = () => {
  const ordersData = useSelector(selectOrdersData);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {ordersData.map((order) => {
          return order.data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 border-t border-b border-gray-300 py-4 text-gray-700 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                  <div>
                    <p className="font-medium sm:text-base">{item.name}</p>
                    <div className="mt-2 flex items-center gap-3 text-base text-gray-700">
                      <p className="text-lg">${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-2">
                      Date:{" "}
                      <span className="text-gray-400">
                        {formatDate(order.date)}
                      </span>
                    </p>
                    <p className="mt-2">
                      Payment:{" "}
                      <span className="text-gray-400">
                        {order.method.toUpperCase()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between md:w-1/2">
                  <div className="flex items-center gap-2">
                    <p className="h-2 min-w-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">Order Placed</p>
                  </div>
                  <button className="cursor-pointer rounded-sm border px-4 py-2 text-sm font-medium">
                    Track Order
                  </button>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Orders;
