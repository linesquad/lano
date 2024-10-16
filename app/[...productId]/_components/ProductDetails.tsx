import Wrapper from "@/app/_components/Wrapper";
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
          <div className="w-full max-w-[522px] h-[335px] lg:h-[396px]">
            <Image
              src={oneProduct?.image}
              width={330}
              height={335}
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
