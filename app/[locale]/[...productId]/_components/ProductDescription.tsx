import Wrapper from "@/app/[locale]/_components/Wrapper";
import { IOneProduct } from "@/types/types";

interface ProductDescriptionProps {
  oneProduct: IOneProduct;
  localisation: string;
}

export default function ProductDescription({
  oneProduct,
  localisation,
}: ProductDescriptionProps) {
  return (
    <div className="mt-[73px]">
      <Wrapper>
        <div className="px-[16px] flex flex-col gap-[16px]">
          <h2 className="text-[#000000] font-medium">პროდუქტის აღწერა</h2>
          <p className="text-[14px] text-[#000000] max-w-[521px]">
            {(localisation === "ka" && oneProduct.description.split("/")[0]) ||
              (localisation === "en" && oneProduct.description.split("/")[1]) ||
              (localisation === "ru" && oneProduct.description.split("/")[2])}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
