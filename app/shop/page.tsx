import Link from "next/link";
import React from "react";
import Wrapper from "../_components/Wrapper";
import vector from "../../public/images/vector.svg";
import Image from "next/image";
import { fetchProduct } from "../api";

const Page = async () => {
  const data = await fetchProduct();
  console.log("Fetched data:", data);

  return (
    <div className="p-5">
      <Wrapper>
        <div className="flex gap-1 text-xs text-[#00000099] px-5 pt-6 pb-4">
          <Link href="/">მთავარი</Link>
          <span>&gt;</span>
          <span>Shop</span>
        </div>
        <div className="grid grid-cols-[1fr_4fr] gap-5">
          <div className="w-full p-5">
            <ul className="text-[#000000] text-base font-medium flex flex-col gap-5">
              <li className="flex items-center justify-between">
                <span>ძაღლები</span>
                <Image
                  src={vector}
                  alt="vector svg"
                  className="cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between">
                <span>კატები</span>
                <Image
                  src={vector}
                  alt="vector svg"
                  className="cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between">
                <span>ჩიტები</span>
                <Image
                  src={vector}
                  alt="vector svg"
                  className="cursor-pointer"
                />
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {data.length}
            {/* {data && data.length > 0 ? (
              data.map((item, index) => <div key={index}>{item.name}</div>)
            ) : (
              <div>No products found.</div>
            )} */}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Page;
