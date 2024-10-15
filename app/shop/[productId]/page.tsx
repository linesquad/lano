import React from "react";
import ProductHeader from "./_components/ProductHeader";
import ProductDetails from "./_components/ProductDetails";
import ProductDescription from "./_components/ProductDescription";
import { fetchOneProduct } from "@/app/api";
import { IOneProduct } from "@/types/types";

interface PageProps {
  params: {
    productId: string;
  };
}

const page = async ({ params }: PageProps) => {
  const oneProduct: IOneProduct = await fetchOneProduct(params.productId);

  return (
    <div>
      <ProductHeader />
      <ProductDetails oneProduct={oneProduct} />
      <ProductDescription oneProduct={oneProduct} />
    </div>
  );
};

export default page;
