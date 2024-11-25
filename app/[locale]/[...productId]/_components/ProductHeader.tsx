import Wrapper from "@/app/[locale]/_components/Wrapper";
import { IOneProduct } from "@/types/types";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
interface ProductHeaderParams {
  oneProduct: IOneProduct;
  localisation: string;
}

export default function ProductHeader({
  oneProduct,
  localisation,
}: ProductHeaderParams) {
  const t = useTranslations("ProductHeader");
  return (
    <div className="mt-[39px]">
      <Wrapper>
        <div className="px-[20px] text-[12px] text-[#00000099] flex items-center gap-[8px]">
          <Link href="/">{t("main")}</Link>
          <span className="text-[16px]">&rarr;</span>
          <Link href="/shop">
            {(localisation === "ka" && oneProduct.animalType.split("/")[0]) ||
              (localisation === "en" && oneProduct.animalType.split("/")[1]) ||
              (localisation === "ru" && oneProduct.animalType.split("/")[2])}
          </Link>
          <span className="text-[16px]">&rarr;</span>
          <Link
            href={`/shop/${
              (localisation === "ka" && oneProduct.animalType.split("/")[0]) ||
              (localisation === "en" && oneProduct.animalType.split("/")[1]) ||
              (localisation === "ru" && oneProduct.animalType.split("/")[2])
            }/${
              (localisation === "ka" && oneProduct.productType.split("/")[0]) ||
              (localisation === "en" && oneProduct.productType.split("/")[1]) ||
              (localisation === "ru" && oneProduct.productType.split("/")[2])
            }/${oneProduct.catId}`}
          >
            {(localisation === "ka" && oneProduct.productType.split("/")[0]) ||
              (localisation === "en" && oneProduct.productType.split("/")[1]) ||
              (localisation === "ru" && oneProduct.productType.split("/")[2])}
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
