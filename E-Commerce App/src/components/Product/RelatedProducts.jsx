import { selectAllProducts } from "../../store/slices/productSlice";
import Title from "../Title";
import ProductItem from "../ProductItem";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const makeSelectRelatedProducts = (category, subCategory, productId) =>
  createSelector([selectAllProducts], (products) =>
    products.filter(
      (p) =>
        p.category === category &&
        p.subCategory === subCategory &&
        p._id !== productId,
    ),
  );

const RelatedProducts = ({ category, subCategory, productId }) => {
  const relatedProducts = useSelector(
    makeSelectRelatedProducts(category, subCategory, productId),
  ).slice(0, 5);

  return (
    <div className="my-24">
      <div className="mb-2 text-center text-3xl">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
