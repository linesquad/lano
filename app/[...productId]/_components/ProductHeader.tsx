import Wrapper from "@/app/_components/Wrapper";

export default function ProductHeader() {
  return (
    <div className="mt-[39px]">
      <Wrapper>
        <div className="px-[20px] text-[12px] text-[#00000099] flex items-center gap-[8px]">
          <p>მთავარი</p>
          <span className="text-[16px]">&rarr;</span>
          <p>ძაღლები</p>
          <span className="text-[16px]">&rarr;</span>
          <p>საკვები</p>
        </div>
      </Wrapper>
    </div>
  );
}
