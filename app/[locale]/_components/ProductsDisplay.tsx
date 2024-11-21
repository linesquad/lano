import { fetchPopularProducts, fetchSaleProducts } from "../../api";
import TrendCarousel from "./TrendCarousel";

async function fetchProducts() {
  const [saleProducts, popularProducts] = await Promise.all([
    fetchSaleProducts(),
    fetchPopularProducts(),
  ]);
  return { saleProducts, popularProducts };
}

export default async function ProductsDisplay({
  popularProduct,
  saleProduct,
}: {
  popularProduct: string;
  saleProduct: string;
}) {
  const { saleProducts, popularProducts } = await fetchProducts();

  return (
    <div>
      <TrendCarousel title={saleProduct} products={saleProducts} />
      <TrendCarousel title={popularProduct} products={popularProducts} />
    </div>
  );
}
