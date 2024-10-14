import Image from "next/image";
import OneProperty from "./OneProperty";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ProductsInfo() {
  return (
    <div className="mt-[31px] flex flex-col lg:w-full">
      <div className="flex flex-col gap-[16px] pb-[24px] border-b-[1px] border-b-[#00000066]">
        <h2 className="text-[#000000] font-bold md:text-[24px]">
          საქონლის მწვადი
        </h2>
        <p className="text-[14px] text-[#000000] font-bold md:text-[20px]">
          4,70 ₾
        </p>
      </div>
      <div className="mt-[24px] flex flex-col gap-[16px]">
        <OneProperty title="ბრენდი" value="?" />
        <OneProperty title="ჯიში" value="უნივერსალური" />
        <OneProperty title="ასაკი" value="ლეკვი" />
        <OneProperty title="არომატი" value="თევზი/ბოსტნეული" />
        <OneProperty title="წონა" value="12კგ" />
        <OneProperty title="პროდუქტის კოდი" value="123456789" />
      </div>

      <Dialog>
        <DialogTrigger>
          <div className="w-[160px] h-[40px] mt-[20px] rounded-[7px] bg-[#EE5335] flex items-center justify-center gap-[10px] lg:self-end">
            <p className="text-[14px] text-[#fff] font-semibold">შეძენა</p>
            <Image src="/images/paw.svg" alt="paw" width={16} height={16} />
          </div>
        </DialogTrigger>
        <DialogContent className="w-[300px] md:w-[523px] rounded-[24px] ">
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
                      +995 599 200 XXX
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
