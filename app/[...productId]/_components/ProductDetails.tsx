import Wrapper from "@/app/[locale]/_components/Wrapper";
import Image from "next/image";
import ProductsInfo from "./ProductsInfo";
import { IOneProduct } from "@/types/types";

interface ProductDetailsProps {
  oneProduct: IOneProduct;
}

export default function ProductDetails({ oneProduct }: ProductDetailsProps) {
  return (
    <div className="mt-[16px]">
      <Wrapper>
        <div className="px-[20px] flex flex-col lg:flex-row lg:justify-between lg:gap-[20px]">
          <div className="relative w-full max-w-[522px] h-[335px] lg:h-[396px]">
            <Image
              src={oneProduct?.image}
              fill
              alt="product"
              className="object-cover rounded-[7px]"
            />
          </div>
          <ProductsInfo oneProduct={oneProduct} />
        </div>
      </Wrapper>
    </div>
  );
}
