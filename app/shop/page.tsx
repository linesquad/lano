import React, { Suspense } from "react";
import ProductsDisplay from "./_components/ProductsDisplay";
import ShopSkeletonLoader from "./_components/ShopSkeletonLoader";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | number | undefined };
}) => {
  const currentPage = searchParams["page"] ?? "1";
  return (
    <Suspense fallback={<ShopSkeletonLoader />}>
      <ProductsDisplay currentPage={currentPage} />
    </Suspense>
  );
};

export default page;
