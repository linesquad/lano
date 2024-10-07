import SingleProduct from "./SingleProduct";
import Wrapper from "./Wrapper";

export default function SaleProducts() {
  return (
    <div>
      <Wrapper>
        <h2 className="text-[16px] text-[#000000] font-medium mt-[32px] ml-[20px]">
          ფასდაკლებული პროდუქტები
        </h2>
        <div className="ml-[20px] mt-[16px]">
          <SingleProduct />
        </div>
      </Wrapper>
    </div>
  );
}
