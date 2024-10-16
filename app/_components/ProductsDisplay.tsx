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
  console.log(saleProducts, "saleProducts");
  console.log(popularProducts, "popularProducts ");

  return (
    <div>
      <TrendCarousel title="ფასდაკლებული პროდუქტები" products={saleProducts} />
      <TrendCarousel title="პოპულარული პროდუქტები" products={popularProducts} />
    </div>
  );
}
