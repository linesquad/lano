import { SingleItemDisplayProps } from "@/types/types";
import Image from "next/image";

const SingleItemDisplay: React.FC<SingleItemDisplayProps> = ({
  title,
  image,
  price,
  discount,
}) => {
  const oldPrice = Number(price.split(" ").at(0)) + discount;
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
        <div className="absolute top-2 left-2 px-[13px] py-[6.5px] rounded-sm bg-[#EE5335] ">
          <span className="text-white text-sm font-semibold ">sale</span>
        </div>
      </div>
      <div className="flex gap-2 justify-start items-center">
        <p
          className={`${
            discount === 0 ? "text-black" : "text-[#FF3B30]"
          } text-base font-semibold`}
        >
          {price.replace(/\$/g, "₾")}
        </p>
        {discount > 0 && (
          <p className="text-[#00000066] line-through text-sm font-medium">
            {oldPrice}
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
