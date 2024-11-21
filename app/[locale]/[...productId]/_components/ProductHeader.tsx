import Wrapper from "@/app/[locale]/_components/Wrapper";
import { IOneProduct } from "@/types/types";
import Link from "next/link";

interface ProductHeaderParams {
  oneProduct: IOneProduct;
}

export default function ProductHeader({ oneProduct }: ProductHeaderParams) {
  return (
    <div className="mt-[39px]">
      <Wrapper>
        <div className="px-[20px] text-[12px] text-[#00000099] flex items-center gap-[8px]">
          <Link href="/">მთავარი</Link>
          <span className="text-[16px]">&rarr;</span>
          <Link href="/shop">{oneProduct.animalType}</Link>
          <span className="text-[16px]">&rarr;</span>
          <Link
            href={`/shop/${oneProduct.animalType}/${oneProduct.productType}/${oneProduct.catId}`}
          >
            {oneProduct.productType}
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
