import React from "react";
import { fetchProduct } from "../api";
import { Product } from "@/types/types";
import ShopPagination from "./ShopPagination";

const Page = async () => {
  const products: Product[] = await fetchProduct();
  const itemsPerPage = 8;

  return (
    <div className="p-5 w-full">
      <ShopPagination products={products} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Page;