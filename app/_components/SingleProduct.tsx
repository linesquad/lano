import { ILandingProducts } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface SingleProductProps {
  product: ILandingProducts;
}

export default function SingleProduct({ product }: SingleProductProps) {
  return (
    <Link href={`/${product.title}/${product._id}`}>
      <div className="pt-[8px] pl-[8px] relative min-w-[150px] w-[150px] md:min-w-[170px] md:w-[170px] lg:min-w-[200px] lg:w-[200px]">
        <div className="w-[150px] h-[150px] object-cover rounded-[7px]">
          <Image
            src={product.image}
            alt="პროდუცტ"
            priority
            fill
            className="object-cover rounded-[7px]"
          />
        </div>
        {product.discount !== 0 && (
          <div className="w-[60px] h-[32px] bg-[#EE5335] flex justify-center items-center rounded-[4px] absolute top-[8px] left-[8px]">
            <span className="text-[#fff] font-semibold">SALE</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-[8px] mt-[8px]">
        <p className="text-[16px] text-[#FF3B30] font-bold">
          {product.price.$numberDecimal}₾
        </p>
        {product.discount !== 0 && (
          <p className="text-[14px] text-[#00000066] font-medium line-through">
            {product.price.$numberDecimal}₾
          </p>
        )}
      </div>
      <p className="text-[14px] text-[#000000] font-medium mt-[8px]">
        {product.title.length > 10
          ? product.title.slice(0, 10) + "..."
          : product.title}
      </p>
    </Link>
  );
}
