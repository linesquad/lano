import React from "react";
import { fetchProductById } from "../../api/index";
import { Product } from "@/types/types";
import SingleItemDisplay from "../SingleItemDisplay";
import ShopPagination from "../ShopPagination";

const Page = async ({ params }: { params: { SubCatId: string[] } }) => {
  const id = params.SubCatId[2];
  const products: Product[] = await fetchProductById(id);
  const itemsPerPage = 6;

  return (
    <div className="p-5 w-full">
      <ShopPagination products={products} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default Page;
