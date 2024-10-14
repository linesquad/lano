import Wrapper from "@/app/_components/Wrapper";
import Image from "next/image";
import ProductsInfo from "./ProductsInfo";

export default function ProductDetails() {
  return (
    <div className="mt-[16px]">
      <Wrapper>
        <div className="px-[20px] flex flex-col">
          <div className="w-full max-w-[522px] h-[335px]">
            <Image
              src="/images/product.png"
              width={330}
              height={335}
              alt="product"
              className="object-cover"
            />
          </div>
          <ProductsInfo />
        </div>
      </Wrapper>
    </div>
  );
}
