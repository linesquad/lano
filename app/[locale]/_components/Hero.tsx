"use client";

import Wrapper from "./Wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  return (
    <div className="mt-[32px] px-[20px]">
      <Wrapper>
        <div>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div>
                  <Image
                    src="/images/courusel1.webp"
                    alt="hero"
                    layout="responsive"
                    width={335}
                    height={161}
                    priority
                    className="rounded-[7px]"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <Image
                    src="/images/courusel2.webp"
                    alt="hero"
                    layout="responsive"
                    width={335}
                    height={161}
                    priority
                    className="rounded-[7px]"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <Image
                    src="/images/courusel3.webp"
                    alt="hero"
                    layout="responsive"
                    width={335}
                    height={161}
                    priority
                    className="rounded-[7px]"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
}
