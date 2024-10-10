import Link from "next/link";
import React from "react";
import Wrapper from "../_components/Wrapper";
import { fetchProduct } from "../api";
import { Product } from "@/types/types";
import SingleItemDisplay from "./SingleItemDisplay";
import Fillter from "./Fillter";

const Page = async () => {
  const data: Product[] = await fetchProduct();
  console.log("Fetched data:", data);

  return (
    <div className="p-5">
      <Wrapper>
        <div className="flex items-center justify-between md:flex-col w-full">
          <div
            className=" gap-1 text-xs text-[#00000099] px-5 pt-6 pb-4 tiny:hidden smaller:hidden hidden
          sm:flex md:w-full"
          >
            <Link href="/">მთავარი</Link>
            <span>&gt;</span>
            <span>Shop</span>
          </div>
          <div className=" p-5 tiny:p-0  md:w-full lg:hidden">
            <Fillter />
          </div>
        </div>
        {/* grid-cols-[1fr_4fr] */}
        <div className="grid  gap-5 tiny:grid-cols-1 smaller:grid-cols-1 grid-cols-1 lg:grid-cols-[1fr_4fr]">
          <div className="hidden p-5 lg:block">
            <Fillter />
          </div>
          <div className="grid grid-cols-3 gap-6 tiny:grid-cols-2 smaller:grid-cols-2 md:grid-cols-4">
            {data.map((item) => (
              <div
                key={item._id}
                className="tiny:max-w-[157px] tiny:max-h-[233px]"
              >
                <SingleItemDisplay
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page;
