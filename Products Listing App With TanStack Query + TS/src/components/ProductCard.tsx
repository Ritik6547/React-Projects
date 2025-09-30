import type { Product } from "../types";

type ProductCardProps = Product;

const ProductCard = ({ id, title, price, thumbnail }: ProductCardProps) => {
  return (
    <div className="max-w-[300px] border rounded">
      <div className=" border-b">
        <img src={thumbnail} alt="" className="" />
      </div>
      <h2 className="mt-2 text-xl font-semibold px-4">{title}</h2>
      <p className="px-4 my-2 text-lg">{id}</p>
      <p className="px-4 my-2 text-lg">${price}</p>
    </div>
  );
};

export default ProductCard;
