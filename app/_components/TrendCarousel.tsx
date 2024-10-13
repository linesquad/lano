"use client";

import Wrapper from "./Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface TrendCarouselProps {
  title: string;
}

export default function TrendCarousel({ title }: TrendCarouselProps) {
  return (
    <div>
      <Wrapper>
        <div>
          <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px] ">
            {title}
          </h2>
          <div className="ml-[20px] mt-[16px]">
            <Swiper spaceBetween={50} slidesPerView={1}>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
