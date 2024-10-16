import React, { Suspense } from "react";
import Hero from "./Hero";
import ProductsDisplay from "./ProductsDisplay";
import SkeletonLoader from "./SkeletonLoader";
import Wrapper from "./Wrapper"; // Assuming this is the same Wrapper component you use in TrendCarousel

const Home = (): JSX.Element => {
  return (
    <div>
      <Hero />

      <Suspense
        fallback={
          <div>
            <Wrapper>
              <div>
                {/* Skeleton for Sale Products */}
                <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px]">
                  ფასდაკლებული პროდუქტები
                </h2>
                <div className="ml-[20px] mt-[16px] flex items-center gap-[3px]">
                  <div className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer">
                    {/* Placeholder for the left arrow */}
                    <div className="w-[14px] h-[10px] bg-gray-300 rounded rotate-180"></div>
                  </div>

                  {/* Skeleton products */}
                  <SkeletonLoader />

                  <div className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer">
                    {/* Placeholder for the right arrow */}
                    <div className="w-[14px] h-[10px] bg-gray-300 rounded"></div>
                  </div>
                </div>

                {/* Skeleton for Popular Products */}
                <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px]">
                  პოპულარული პროდუქტები
                </h2>
                <div className="ml-[20px] mt-[16px] flex items-center gap-[3px]">
                  <div className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer">
                    {/* Placeholder for the left arrow */}
                    <div className="w-[14px] h-[10px] bg-gray-300 rounded rotate-180"></div>
                  </div>

                  {/* Skeleton products */}
                  <SkeletonLoader />

                  <div className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer">
                    {/* Placeholder for the right arrow */}
                    <div className="w-[14px] h-[10px] bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </Wrapper>
          </div>
        }
      >
        <ProductsDisplay />
      </Suspense>
    </div>
  );
};

export default Home;
