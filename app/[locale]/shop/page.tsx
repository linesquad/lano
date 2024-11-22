import React, { Suspense } from "react";
import ProductsDisplay from "./_components/ProductsDisplay";
import ShopSkeletonLoader from "./_components/ShopSkeletonLoader";

const page = async ({
  searchParams,
  params,
}: {
  searchParams: { [key: string]: string | string[] | number | undefined };
  params: { locale: string };
}) => {
  const currentPage = searchParams["page"] ?? "1";
  const { locale } = params;

  return (
    <Suspense fallback={<ShopSkeletonLoader />}>
      <ProductsDisplay currentPage={currentPage} locale={locale} />
    </Suspense>
  );
};

export default page;
