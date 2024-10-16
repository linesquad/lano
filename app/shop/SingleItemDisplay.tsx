import { ProductDetails } from "@/types/types"; // Adjust import if necessary
import Image from "next/image";
import { FC } from "react";

const SingleItemDisplay: FC<{ item: ProductDetails }> = ({ item }) => {
  const { image, title, price, discount } = item;

  const discountAmount = discount
    ? (parseFloat(price.$numberDecimal) * discount) / 100
    : 0;
  const discountedPrice = parseFloat(price.$numberDecimal) - discountAmount;

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
        {discount !== 0 && (
          <div className="absolute top-2 left-2 px-[13px] py-[6.5px] rounded-sm bg-[#EE5335]">
            <span className="text-white text-sm font-semibold">Sale</span>
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-start items-center">
        {discount ? (
          <>
            <p className="text-[#FF3B30] text-base font-semibold">
              {discountedPrice.toFixed(2)}
            </p>
            <p className="text-[#00000066] line-through text-sm font-medium">
              {price.$numberDecimal} 
            </p>
          </>
        ) : (
          <p className="text-black text-base font-semibold">
            {price.$numberDecimal} 
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
