import { Product } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

const SingleItemDisplay: FC<{ item: Product }> = ({ item }) => {
  // const oldPrice = Number(price.split(" ").at(0)) + discount;
  const { image, title, currentPrice, price, dFlag } = item;
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="max-h-[157px]"
        />
        {dFlag && (
          <div className="absolute top-2 left-2 px-[13px] py-[6.5px] rounded-sm bg-[#EE5335] ">
            <span className="text-white text-sm font-semibold ">sale</span>
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-start items-center">
        <p
          className={`${
            !dFlag ? "text-black" : "text-[#FF3B30]"
          } text-base font-semibold`}
        >
          {price}
        </p>
        {dFlag && (
          <p className="text-[#00000066] line-through text-sm font-medium">
            {currentPrice}
          </p>
        )}
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
      </div>
    </>
  );
};

export default SingleItemDisplay;
