import { Link } from "@/navigation";
import { ProductDetails } from "@/types/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";

const SingleItemDisplay: FC<{ item: ProductDetails; locale: string }> = ({
  item,
  locale,
}) => {
  const { image, title, price, discount, productType, mealDetails } = item;

  const originalPrice = parseFloat(item.price.$numberDecimal);
  const discountAmount = item.discount
    ? (originalPrice * item.discount) / 100
    : 0;
  const discountedPrice =
    item.discount > 0 ? originalPrice - discountAmount : originalPrice;

  const t = useTranslations("SingleItemDisplay");
  return (
    <div className="flex flex-col items-center h-[230px]">
      <div className="group relative min-w-[150px] w-[150px] md:min-w-[170px] md:w-[170px] lg:min-w-[180px] lg:w-[180px] transition duration-500">
        <div className="w-full h-[150px] relative rounded-[7px] overflow-hidden border border-transparent hover:border-black group-hover:border group-hover:border-black transition duration-500">
          <Image
            src={image}
            alt="product"
            priority
            fill
            className="object-cover group-hover:opacity-0 rounded-[7px] transition duration-500 ease-linear"
          />
          {discount !== 0 && (
            <div className="w-[60px] h-[32px] bg-[#EE5335] group-hover:opacity-0 flex justify-center items-center rounded-[4px] absolute top-[8px] left-[8px] transition duration-500">
              <span className="text-[#fff] font-semibold">{t("sale")}</span>
            </div>
          )}
          <div className="p-[10px]">
            <div className="items-center gap-[8px] group-hover:flex hidden transition duration-500 opacity-0 group-hover:opacity-100 delay-300">
              <p className="text-[16px] text-[#FF3B30] font-bold">
                {discountedPrice}₾
              </p>
              {discount !== 0 && (
                <p className="text-[14px] text-[#00000066] font-medium line-through">
                  {item.price.$numberDecimal}₾
                </p>
              )}
            </div>
            <p className="text-[14px] text-[#000000] font-medium mt-[8px] group-hover:block transition duration-500 opacity-0 group-hover:opacity-100 delay-300">
              {/* {title.length > 10 ? title.slice(0, 10) + "..." : title} */}
              {locale == "ka"
                ? title.split("/")[0]
                : locale == "en"
                ? title.split("/")[1]
                : title.split("/")[2]}
            </p>
            <p className="text-[14px] text-[#000000] font-medium pt-[10px] group-hover:block transition duration-500 opacity-0 group-hover:opacity-100 delay-300">
              {t("minimal")}
            </p>
            {productType ? (
              <p className="text-[14px] text-[#000000] font-medium group-hover:block transition duration-500 opacity-0 group-hover:opacity-100 delay-300">
                {t("order")}: {mealDetails.weight} {t("kilogram")}
              </p>
            ) : (
              ""
            )}
            <p className="text-[14px] text-[#000000] font-medium group-hover:block transition duration-500 opacity-0 group-hover:opacity-100 delay-300">
              599 200 200
            </p>
          </div>
        </div>
        <div className="mt-[8px]">
          <div className="flex items-center gap-[8px] group-hover:hidden transition duration-500">
            <p className="text-[16px] text-[#FF3B30] font-bold">
              {discountedPrice}₾
            </p>
            {discount !== 0 && (
              <p className="text-[14px] text-[#00000066] font-medium line-through">
                {price.$numberDecimal}₾
              </p>
            )}
          </div>
          <p className="text-[14px] text-[#000000] font-medium mt-[8px] group-hover:hidden transition duration-500">
            {/* {title.length > 10 ? title.slice(0, 10) + "..." : title} */}
            {locale == "ka"
              ? title.split("/")[0]
              : locale == "en"
              ? title.split("/")[1]
              : title.split("/")[2]}
          </p>

          <Link
            href={`/product/${item._id}`}
            className="transition duration-500 opacity-0 group-hover:opacity-100 delay-100 w-full"
          >
            <div className="hidden group-hover:block mt-[8px] ">
              <button
                className="w-full text-black py-2 rounded-[7px] border border-black hover:bg-[#514747]
               hover:text-white transition duration-500 ease-in-out"
              >
                {t("more")}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItemDisplay;
