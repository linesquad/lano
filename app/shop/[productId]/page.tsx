import React from "react";
import ProductHeader from "./_components/ProductHeader";
import ProductDetails from "./_components/ProductDetails";
import ProductDescription from "./_components/ProductDescription";

const page = () => {
  return (
    <div>
      <ProductHeader />
      <ProductDetails />
      <ProductDescription />
    </div>
  );
};

export default page;
