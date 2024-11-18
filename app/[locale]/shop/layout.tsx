import Link from "next/link";
import React from "react";
import Filter from "./_components/Filter";
import Wrapper from "../../_components/Wrapper";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center">
        <div className="gap-1 text-xs text-[#00000099] px-5 pt-6 pb-4 tiny:hidden smaller:hidden hidden sm:flex md:w-full">
          <Link href="/">მთავარი</Link>
          <span>&gt;</span>
          <span>Shop</span>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-[25%] w-full p-5 tiny:p-0">
            <Filter />
          </div>
          {children}
        </div>
      </div>
    </Wrapper>
  );
}
