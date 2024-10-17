"use client";

import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import Image from "next/image";
import { Swiper as SwiperCore } from "swiper";
import { ProductDetails } from "@/types/types";
import SingleProduct from "../_components/SingleProduct";

interface TrendCarouselProps {
  title: string;
  products: { products: ProductDetails[]; page: number; lenBtns: null };
}

export default function TrendCarousel({ title, products }: TrendCarouselProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const productArray = products.products;

  const showRightArrow =
    currentIndex < productArray.length - Math.min(productArray.length, 5);

  return (
    <div>
      <Wrapper>
        <div>
          <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px] ">
            {title}
          </h2>
          <div className="ml-[20px] mt-[16px] flex items-center gap-[3px]">
            <div className="relative">
              {currentIndex > 0 && (
                <div
                  onClick={handlePrev}
                  className="hidden absolute bottom-0 left-0 w-[44px] h-[44px] bg-white shadow-lg
                    shadow-[#00000026] rounded-full md:flex items-center justify-center cursor-pointer
                    z-50 hover:bg-red-400 transition-all duration-500 ease-in-out"
                >
                  <Image
                    src="/images/carouselArrow.svg"
                    alt="arrow"
                    width={14}
                    height={10}
                    className="rotate-180"
                  />
                </div>
              )}
            </div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setCurrentIndex(swiper.activeIndex);
              }}
              slidesPerView={Math.min(productArray.length, 5)}
              breakpoints={{
                300: {
                  slidesPerView: Math.min(productArray.length, 2),
                },
                450: {
                  slidesPerView: Math.min(productArray.length, 3),
                },
                740: {
                  slidesPerView: Math.min(productArray.length, 4),
                },
                1024: {
                  slidesPerView: Math.min(productArray.length, 5),
                },
              }}
            >
              {productArray.map((item) => (
                <SwiperSlide key={item._id}>
                  <SingleProduct product={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="relative">
              {showRightArrow && (
                <div
                  onClick={handleNext}
                  className="hidden absolute bottom-0 right-0 w-[44px] h-[44px] bg-white shadow-lg
                    shadow-[#00000026] rounded-full md:flex items-center justify-center cursor-pointer
                    z-50 hover:bg-red-400 transition-all duration-500 ease-in-out"
                >
                  <Image
                    src="/images/carouselArrow.svg"
                    alt="arrow"
                    width={14}
                    height={10}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
