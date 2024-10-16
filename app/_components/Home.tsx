import React, { Suspense } from "react";
import Hero from "./Hero";

import ProductsDisplay from "./ProductsDisplay";
import SkeletonLoader from "./SkeletonLoader";

const Home = (): JSX.Element => {
  return (
    <div>
      <Hero />

      <Suspense fallback={<SkeletonLoader />}>
        <ProductsDisplay />
      </Suspense>
    </div>
  );
};

export default Home;
