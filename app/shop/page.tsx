import React from "react";
import { fetchProduct } from "../api";
import SingleItemDisplay from "./SingleItemDisplay";

import { Product } from "@/types/types";

const Page = async () => {
  const products: Product[] = await fetchProduct();
  return (
    <div className="p-5 w-full">
      <div className="grid grid-cols-3 gap-6 tiny:grid-cols-2 smaller:grid-cols-2 md:grid-cols-4">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item._id}
              className="tiny:max-w-[157px] tiny:max-h-[233px]"
            >
              <SingleItemDisplay item={item} />
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Page;
