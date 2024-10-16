import React, { Suspense } from "react";
import ProductsDisplay from "./ProductsDisplay";
import ShopSkeletonLoader from "./ShopSkeletonLoader";

const page = async () => {
  return (
    <Suspense fallback={<ShopSkeletonLoader />}>
      <ProductsDisplay />
    </Suspense>
  );
};

export default page;
