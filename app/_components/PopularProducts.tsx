import { ILandingProducts } from "@/types/types";
import { fetchPopularProducts } from "../api";
import TrendCarousel from "./TrendCarousel";

export default async function PopularProducts() {
  const popularProducts: ILandingProducts[] = await fetchPopularProducts();

  return (
    <div>
      <TrendCarousel title="პოპულარული პროდუქტები" products={popularProducts} />
    </div>
  );
}
