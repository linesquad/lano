"use client";

import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import SingleProduct from "./SingleProduct";
import Image from "next/image";
import { Swiper as SwiperCore } from "swiper";
import { ILandingProducts } from "@/types/types";

interface TrendCarouselProps {
  title: string;
  products: ILandingProducts[];
}

export default function TrendCarousel({ title, products }: TrendCarouselProps) {
  const swiperRef = useRef<SwiperCore>();

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <Wrapper>
        <div>
          <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px] ">
            {title}
          </h2>
          <div className="ml-[20px] mt-[16px] flex items-center gap-[3px]">
            <div
              onClick={handlePrev}
              className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/images/carouselArrow.svg"
                alt="arrow"
                width={14}
                height={10}
                className="rotate-180"
              />
            </div>

            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={Math.min(products.length, 1)}
              breakpoints={{
                300: {
                  slidesPerView: Math.min(products.length, 2),
                },
                450: {
                  slidesPerView: Math.min(products.length, 3),
                },
                740: {
                  slidesPerView: Math.min(products.length, 4),
                },
                1024: {
                  slidesPerView: Math.min(products.length, 5),
                },
              }}
            >
              {products?.map((item) => {
                return (
                  <SwiperSlide key={item._id}>
                    <SingleProduct product={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div
              onClick={handleNext}
              className="hidden w-[44px] h-[44px] shadow-lg shadow-[#00000026] rounded-[50%] md:flex items-center justify-center cursor-pointer"
            >
              <Image
                src="/images/carouselArrow.svg"
                alt="arrow"
                width={14}
                height={10}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
