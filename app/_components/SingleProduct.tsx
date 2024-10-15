import { ILandingProducts } from "@/types/types";
import Image from "next/image";

import Link from "next/link";

interface SingleProductProps {
  product: ILandingProducts;
}

export default function SingleProduct({ product }: SingleProductProps) {
  console.log(product, "product");

  return (
    <div className="flex flex-col items-center h-[230px]">
      <div className="group relative min-w-[150px] w-[150px] md:min-w-[170px] md:w-[170px] lg:min-w-[200px] lg:w-[200px] transition duration-300">
        <div className="w-full h-[150px] relative rounded-[7px] overflow-hidden border border-transparent  hover:border-black group-hover:border group-hover:border-black">
          <Image
            src={product.image}
            alt="პროდუცტ"
            priority
            fill
            className="object-cover group-hover:hidden rounded-[7px] transition duration-300"
          />
          {product.discount !== 0 && (
            <div className="w-[60px] h-[32px] bg-[#EE5335] group-hover:hidden flex justify-center items-center rounded-[4px] absolute top-[8px] left-[8px]">
              <span className="text-[#fff] font-semibold">SALE</span>
            </div>
          )}
          <div className="p-[10px]">
            <div className="  items-center gap-[8px] group-hover:flex hidden transition duration-300">
              <p className="text-[16px] text-[#FF3B30] font-bold">
                {product.currentPrice}₾
              </p>
              {product.discount !== 0 && (
                <p className="text-[14px] text-[#00000066] font-medium line-through">
                  {product.price}₾
                </p>
              )}
            </div>
            <p className="text-[14px] text-[#000000] font-medium mt-[8px] group-hover:block transition duration-300">
              {product.title.length > 10
                ? product.title.slice(0, 10) + "..."
                : product.title}
            </p>
          </div>
        </div>

        <div className="mt-[8px] p-[8px]">
          <div className="flex items-center gap-[8px] group-hover:hidden transition duration-300">
            <p className="text-[16px] text-[#FF3B30] font-bold">
              {product.currentPrice}₾
            </p>
            {product.discount !== 0 && (
              <p className="text-[14px] text-[#00000066] font-medium line-through">
                {product.price}₾
              </p>
            )}
          </div>
          <p className="text-[14px] text-[#000000] font-medium mt-[8px] group-hover:hidden transition duration-300">
            {product.title.length > 10
              ? product.title.slice(0, 10) + "..."
              : product.title}
          </p>

          <Link href={`/shop/${product._id}`}>
            <div className="hidden group-hover:block mt-[8px] p-[8px] transition duration-300">
              <button className="w-full  text-black py-2 rounded-[7px] border border-black transition duration-300">
                ვრცლად
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
