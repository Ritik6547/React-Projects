export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export type PageParamType = {
  pageParam: number;
};
