import Wrapper from "@/app/_components/Wrapper";
import { IOneProduct } from "@/types/types";

interface ProductDescriptionProps {
  oneProduct: IOneProduct;
}

export default function ProductDescription({
  oneProduct,
}: ProductDescriptionProps) {
  return (
    <div className="mt-[73px]">
      <Wrapper>
        <div className="px-[16px] flex flex-col gap-[16px]">
          <h2 className="text-[#000000] font-medium">პროდუქტის აღწერა</h2>
          <p className="text-[14px] text-[#000000] max-w-[521px]">
            {oneProduct.description}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
