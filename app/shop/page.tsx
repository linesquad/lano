import React, { Suspense } from "react";
import ProductsDisplay from "./_components/ProductsDisplay";
import ShopSkeletonLoader from "./_components/ShopSkeletonLoader";

const page = async () => {
  return (
    <Suspense fallback={<ShopSkeletonLoader />}>
      <ProductsDisplay />
    </Suspense>
  );
};

export default page;
