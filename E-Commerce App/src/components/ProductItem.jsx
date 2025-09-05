import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  return (
    <Link to={`/product/${id}`} className="cursor-pointer text-gray-700">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="transition ease-in-out hover:scale-110"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">${price}</p>
    </Link>
  );
};

export default ProductItem;
