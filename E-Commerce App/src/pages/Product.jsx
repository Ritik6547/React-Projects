import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllProducts } from "../store/slices/productSlice";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/Product/RelatedProducts";
import { createSelector } from "@reduxjs/toolkit";
import { addCartItem } from "../store/slices/cartSlice";
import { toast } from "react-toastify";
import { showToast } from "../utils/toast";

const makeSelectProductById = (id) =>
  createSelector([selectAllProducts], (products) =>
    products.find((p) => p._id === id),
  );

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const productData = useSelector(makeSelectProductById(productId));
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    setImage(productData?.image[0]);
  }, [productData]);

  const ADD_TO_CART_SUCCESS_ID = "add-to-cart-success";
  const ADD_TO_CART_ERROR_ID = "add-to-cart-error";
  const handleAddToCart = () => {
    if (!size) {
      showToast(ADD_TO_CART_ERROR_ID, "error", "Select Product Size");
      return;
    }
    dispatch(
      addCartItem({
        productId: productData._id,
        size: size,
      }),
    );
    toast.dismiss(ADD_TO_CART_ERROR_ID);
    showToast(ADD_TO_CART_SUCCESS_ID, "success", "Product added to cart");
  };

  return productData ? (
    <div className="border-t pt-10 opacity-100 transition-opacity duration-500 ease-in">
      {/* Product Data */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* Product Images */}
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full justify-between overflow-x-auto sm:w-[18.7%] sm:flex-col sm:justify-normal sm:overflow-y-scroll">
            {productData.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt="product-image"
                className="w-[24%] flex-shrink-0 cursor-pointer sm:mb-3 sm:w-full"
                onClick={() => setImage(imgSrc)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            {image && (
              <img
                className="h-auto w-full"
                src={image}
                alt="product-main-image"
              />
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="mt-2 text-2xl font-medium">{productData.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            <img className="w-3" src={assets.star_icon} alt="star-icon" />
            <img className="w-3" src={assets.star_icon} alt="star-icon" />
            <img className="w-3" src={assets.star_icon} alt="star-icon" />
            <img className="w-3" src={assets.star_icon} alt="star-icon" />
            <img className="w-3" src={assets.star_dull_icon} alt="star-icon" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">${productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="my-8 flex flex-col gap-4">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`cursor-pointer border border-gray-300 bg-gray-100 px-4 py-2 ${size === item && "border-orange-500"}`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="cursor-pointer bg-black px-8 py-3 text-sm text-white active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 text-gray-400 sm:w-4/5" />
          <div className="mt-5 flex flex-col gap-1 text-sm text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Desc & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
