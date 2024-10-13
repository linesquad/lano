import { ILandingProducts } from "@/types/types";
import { fetchSaleProducts } from "../api";
import TrendCarousel from "./TrendCarousel";

export default async function SaleProducts() {
  const saleProducts: ILandingProducts[] = await fetchSaleProducts();

  return (
    <div>
      <TrendCarousel title="ფასდაკლებული პროდუქტები" products={saleProducts} />
    </div>
  );
}
