import Image from "next/image";
import OneProperty from "./OneProperty";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { IOneProduct } from "@/types/types";

interface ProductsInfoProps {
  oneProduct: IOneProduct;
  localisation: string;
}

export default function ProductsInfo({
  oneProduct,
  localisation,
}: ProductsInfoProps) {
  return (
    <div className="mt-[91px] lg:mt-[0px] flex flex-col lg:w-full">
      <div className="flex flex-col gap-[16px] pb-[24px] border-b-[1px] border-b-[#00000066]">
        <h2 className="text-[#000000] font-bold md:text-[24px]">
          {(localisation === "ka" && oneProduct.title.split("/")[0]) ||
            (localisation === "en" && oneProduct.title.split("/")[1]) ||
            (localisation === "ru" && oneProduct.title.split("/")[2])}
        </h2>
        <p className="text-[14px] text-[#000000] font-bold md:text-[20px]">
          {oneProduct.price.$numberDecimal} ₾
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[16px]">
        <OneProperty
          title="ბრენდი"
          value={
            (localisation === "ka" && oneProduct.brand.split("/")[0]) ||
            (localisation === "en" && oneProduct.brand.split("/")[1]) ||
            (localisation === "ru" && oneProduct.brand.split("/")[2])
          }
        />
        <OneProperty
          title="ჯიში"
          value={
            (localisation === "ka" && oneProduct.productType.split("/")[0]) ||
            (localisation === "en" && oneProduct.productType.split("/")[1]) ||
            (localisation === "ru" && oneProduct.productType.split("/")[2])
          }
        />
        <OneProperty title="ასაკი" value={oneProduct.mealDetails.age} />
        <OneProperty
          title="არომატი"
          value={
            (localisation === "ka" &&
              oneProduct.mealDetails.aroma.split("/")[0]) ||
            (localisation === "en" &&
              oneProduct.mealDetails.aroma.split("/")[1]) ||
            (localisation === "ru" &&
              oneProduct.mealDetails.aroma.split("/")[2])
          }
        />
        <OneProperty title="წონა" value={oneProduct.mealDetails.weight} />
      </div>

      <Dialog>
        <DialogTrigger className="w-[160px] h-[40px] mt-[20px] rounded-[7px] bg-[#EE5335] flex items-center justify-center gap-[10px] lg:self-end">
          <p className="text-[14px] text-[#fff] font-semibold">შეძენა</p>
          <Image src="/images/paw.svg" alt="paw" width={16} height={16} />
        </DialogTrigger>
        <DialogContent className="w-[300px] md:w-[523px] rounded-[24px]">
          <DialogTitle>
            <div className="flex flex-col gap-[40px] mt-[20px] p-[10px] md:p-[20px]">
              <div className="flex items-start gap-[8px]">
                <Image
                  src="/images/time.svg"
                  alt="time"
                  width={18}
                  height={18}
                  className="mt-[2px] md:mt-[5px]"
                />
                <div>
                  <p className="text-[14px] lg:text-[18px] text-[#000] font-semibold">
                    მიტანის საათები
                  </p>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <p className="text-[12px] lg:text-[16px] text-[#000]">
                      ორშაბათი - პარასკევი 9:00 - 22:00
                    </p>
                    <p className="text-[12px] lg:text-[16px] text-[#000]">
                      შაბათი - კვირა 12:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-[8px]">
                <Image
                  src="/images/phone.svg"
                  alt="time"
                  width={18}
                  height={18}
                  className="mt-[2px] md:mt-[5px]"
                />
                <div>
                  <p className="text-[14px] lg:text-[18px] text-[#000] font-semibold">
                    შესაკვეთად დაგვიკავშირდით
                  </p>
                  <div className="mt-[16px] flex flex-col gap-[8px]">
                    <p className="text-[12px] lg:text-[16px] text-[#000]">
                      +995 599 200 200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
}
