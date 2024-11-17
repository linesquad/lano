import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";

import LanguageChangerDropDown from "./LanguageChangerDropDown";
const Header = () => {
  return (
    <div className="p-[20px]">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href="/" className="w-[94px] h-[40px] md:w-[137px] md:h-[64px]">
            <Image
              src="/images/headerLogo.svg"
              alt="logo"
              layout="responsive"
              width={94}
              height={64}
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/shop"
              className="w-[89px] h-[32px] md:w-[160px] md:h-[40px] rounded-[4px] bg-[#EE5335] flex items-center justify-center gap-[8px] cursor-pointer"
            >
              <p className="text-[14px] font-semibold text-[#fff]">Shop</p>
              <Image
                src="/images/paw.svg"
                alt="logo"
                width={16}
                height={16}
                priority
              />
            </Link>
            <LanguageChangerDropDown />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
