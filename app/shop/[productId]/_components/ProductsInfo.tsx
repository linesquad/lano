import Image from "next/image";
import OneProperty from "./OneProperty";

export default function ProductsInfo() {
  return (
    <div className="mt-[31px]">
      <div className="flex flex-col gap-[16px] pb-[24px] border-b-[1px] border-b-[#00000066]">
        <h2 className="text-[#000000] font-bold">საქონლის მწვადი</h2>
        <p className="text-[14px] text-[#000000] font-bold">4,70 ₾</p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[16px]">
        <OneProperty title="ბრენდი" value="?" />
        <OneProperty title="ჯიში" value="უნივერსალური" />
        <OneProperty title="ასაკი" value="ლეკვი" />
        <OneProperty title="არომატი" value="თევზი/ბოსტნეული" />
        <OneProperty title="წონა" value="12კგ" />
        <OneProperty title="პროდუქტის კოდი" value="123456789" />
      </div>
      <div className="w-[160px] h-[40px] mt-[20px] rounded-[7px] bg-[#EE5335] flex items-center justify-center gap-[10px]">
        <p className="text-[14px] text-[#fff] font-semibold">შეძენა</p>
        <Image src="/images/paw.svg" alt="paw" width={16} height={16} />
      </div>
    </div>
  );
}
