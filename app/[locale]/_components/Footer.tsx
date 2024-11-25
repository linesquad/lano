import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";
import { useTranslations } from "next-intl";

const Footer = (): JSX.Element => {
  const t = useTranslations("Footer");
  return (
    <div className="bg-[#1D1D1D] p-[20px] mt-[56px]">
      <Wrapper>
        <div className="flex flex-col gap-[36px] pb-[36px] border-b-[0.5px] border-b-[#FFFFFF80] md:flex-row md:justify-between md:p-[40px]">
          <Image
            src="/images/headerLogo.svg"
            alt="logo"
            width={94}
            height={40}
          />

          <div>
            <div className="flex items-start gap-[8px]">
              <Image
                src="/images/time.svg"
                alt="time"
                width={18}
                height={18}
                className="mt-[2px] md:mt-[5px]"
              />
              <div>
                <p className="text-[14px] lg:text-[18px] text-[#fff] font-semibold">
                  {t("delivery-time")}
                </p>
                <div className="mt-[16px] flex flex-col gap-[8px]">
                  <p className="text-[12px] lg:text-[16px] text-[#fff]">
                    {t("monday")}
                  </p>
                  <p className="text-[12px] lg:text-[16px] text-[#fff]">
                    {t("saturday")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-[8px]">
              <Image
                src="/images/phone.svg"
                alt="time"
                width={18}
                height={18}
                className="mt-[2px] md:mt-[5px]"
              />
              <div>
                <p className="text-[14px] lg:text-[18px] text-[#fff] font-semibold">
                  {t("contactUs")}
                </p>
                <div className="mt-[16px] flex flex-col gap-[8px]">
                  <p className="text-[12px] lg:text-[16px] text-[#fff]">
                    +995 599 200 200
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61555418867755"
            target="_blank"
          >
            <Image
              src="/images/fb-white.svg"
              alt="time"
              width={24}
              height={24}
              className="rounded-[50%]"
            />
          </a>
        </div>
      </Wrapper>
      <p className="text-[12px] text-[#FFFFFF80] mt-[24px] text-center lg:text-[16px]">
        © 2024 LineDevLTD. {t("protected")}
      </p>
    </div>
  );
};

export default Footer;
