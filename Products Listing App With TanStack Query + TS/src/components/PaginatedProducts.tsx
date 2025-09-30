import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPaginatedProducts } from "../api/products";
import ProductCard from "./ProductCard";
import { useState } from "react";

const PaginatedProducts = () => {
  const [skip, setSkip] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", skip],
    queryFn: () => fetchPaginatedProducts(skip),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="px-30 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Paginated Products
      </h1>
      {isLoading ? (
        <h2 className="text-2xl font-medium">Loading...</h2>
      ) : isError ? (
        <h2 className="text-2xl font-medium">{error.message}</h2>
      ) : (
        <div className="flex gap-8 justify-around ">
          {data?.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              thumbnail={p.thumbnail}
              price={p.price}
            />
          ))}
        </div>
      )}

      <div className={`mt-8  ${data ? "flex" : "hidden"}  py-2`}>
        <div className="mx-auto flex gap-8 ">
          <button
            onClick={() => setSkip((prev) => prev - 4)}
            disabled={skip === 0 ? true : false}
            className={`border-1 px-8 py-2 rounded-md text-lg hover:bg-black hover:text-white transition cursor-pointer ${
              skip === 0 && "bg-gray-200 border-gray-300"
            } `}>
            Prev
          </button>
          <button
            onClick={() => setSkip((prev) => prev + 4)}
            disabled={skip === 36 ? true : false}
            className={`border-1 px-8 py-2 rounded-md text-lg hover:bg-black hover:text-white transition cursor-pointer ${
              skip === 36 && "bg-gray-200 border-gray-300"
            } `}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedProducts;
