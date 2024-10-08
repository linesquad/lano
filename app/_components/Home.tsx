import React from "react";
import Hero from "./Hero";
import SaleProducts from "./SaleProducts";
import PopularProducts from "./PopularProducts";

const Home = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <SaleProducts />
      <PopularProducts />
    </div>
  );
};

export default Home;
