import axios from "axios";
import type { PageParamType, Product, ProductsResponse } from "../types";

export const fetchPaginatedProducts = async (
  skip: number
): Promise<Product[]> => {
  const res = await axios.get<ProductsResponse>(
    `https://dummyjson.com/products?limit=4&skip=${skip}`
  );

  return res.data.products;
};

export const fetchInfiniteProducts = async ({
  pageParam,
}: PageParamType): Promise<Product[]> => {
  console.log(pageParam);
  const res = await axios.get<ProductsResponse>(
    `https://dummyjson.com/products?limit=4&skip=${pageParam}`
  );

  return res.data.products;
};
