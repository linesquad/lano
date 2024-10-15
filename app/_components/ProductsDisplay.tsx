// აქ იქმნება ერთი პროდუქტის დისფლეი სადაც ორივე ერთად იფეჩება შესაბამისად არ გვჭირდება ორი აპის ქოლის გაკეთება და მერე ამას ვარენდერებთ

import { fetchPopularProducts, fetchSaleProducts } from "../api";
import TrendCarousel from "./TrendCarousel";

async function fetchProducts() {
  const [saleProducts, popularProducts] = await Promise.all([
    fetchSaleProducts(),
    fetchPopularProducts(),
  ]);
  return { saleProducts, popularProducts };
}

export default async function ProductsDisplay() {
  const { saleProducts, popularProducts } = await fetchProducts();

  return (
    <div>
      <TrendCarousel title="ფასდაკლებული პროდუქტები" products={saleProducts} />
      <TrendCarousel title="პოპულარული პროდუქტები" products={popularProducts} />
    </div>
  );
}
