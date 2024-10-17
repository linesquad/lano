import React from "react";
import { fetchProduct } from "../../api";
import SingleItemDisplay from "./SingleItemDisplay";

const ProductsDisplay = async () => {
  const response = await fetchProduct(1);
  if (!response || !response.products || response.products.length === 0) {
    return (
      <h1 className="w-[70%] font-medium text-[#000] text-center">
        No Products found !
      </h1>
    );
  }
  const { products, lenBtns, page } = response;
  return (
    <div className="p-5 w-full">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 tiny:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div key={item._id} className="tiny:max-w-[157px] tiny:max-h-[233px]">
            <SingleItemDisplay item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
