import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchInfiniteProducts } from "../api/products";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const InfiniteProducts = () => {
  const { ref, inView } = useInView();

  const { data, isLoading, isError, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infiniteProducts"],
      queryFn: fetchInfiniteProducts,
      initialPageParam: 0,
      getNextPageParam: (_lastPage, allPages) => {
        if (allPages.length < 10) {
          return allPages.length * 4;
        }
        return undefined;
      },
    });


  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="px-30 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Infinite Products</h1>
      {isLoading ? (
        <h2 className="text-2xl font-medium">Loading...</h2>
      ) : isError ? (
        <h2 className="text-2xl font-medium">{error.message}</h2>
      ) : (
        <div className="grid grid-cols-2 items-center gap-8 justify-around mb-4 ">
          {data?.pages.map((page) =>
            page.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                thumbnail={p.thumbnail}
                price={p.price}
              />
            ))
          )}
        </div>
      )}
      <div ref={ref} className="text-center">
        {isFetchingNextPage && "Load More..."}
      </div>
    </div>
  );
};

export default InfiniteProducts;
