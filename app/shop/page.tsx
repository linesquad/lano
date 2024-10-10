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
        <div className="flex gap-1 text-xs text-[#00000099] px-5 pt-6 pb-4 tiny:hidden">
          <Link href="/">მთავარი</Link>
          <span>&gt;</span>
          <span>Shop</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5 tiny:grid-cols-1">
          <div className="w-full p-5 tiny:p-0">
            <Fillter />
          </div>
          <div className="grid grid-cols-4 gap-6 tiny:grid-cols-2">
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
