import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto">
      {children}
    </div>
  );
}
