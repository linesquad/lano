"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SingleProduct from "./SingleProduct";
import Wrapper from "./Wrapper";
import { useEffect, useState } from "react";

export default function SaleProducts() {
  const [itemsPerPage, setItemsPerPage] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerPage(6);
    } else if (width >= 768) {
      setItemsPerPage(4);
    } else {
      setItemsPerPage(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <Wrapper>
        <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px] ">
          ფასდაკლებული პროდუქტები
        </h2>
        <div className="ml-[20px] mt-[16px]">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center mt-auto"
                >
                  {Array.from({ length: itemsPerPage }).map((_, i) => (
                    <div key={i}>
                      <SingleProduct />
                    </div>
                  ))}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
}