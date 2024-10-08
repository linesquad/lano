import Image from "next/image";

export default function SingleProduct() {
  return (
    <div>
      <div className="pt-[8px] pl-[8px] relative w-[150px] md:w-[170px] lg:w-[150px] xl:w-[180px]">
        <Image
          src="/images/product.png"
          alt="პროდუცტ"
          width={150}
          height={150}
          priority
          className="rounded-[7px]"
        />
        <div className="w-[60px] h-[32px] bg-[#EE5335] flex justify-center items-center rounded-[4px] absolute top-[8px] left-[8px]">
          <span className="text-[#fff] font-semibold">SALE</span>
        </div>
      </div>
      <div className="flex items-center gap-[8px] mt-[8px]">
        <p className="text-[16px] text-[#FF3B30] font-bold">2,00 ₾</p>
        <p className="text-[14px] text-[#00000066] font-medium line-through">
          4,70 ₾
        </p>
      </div>
      <p className="text-[14px] text-[#000000] font-medium mt-[8px]">
        საქონლის მწვადი
      </p>
    </div>
  );
}
