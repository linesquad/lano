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
  localisation,
}: {
  popularProduct: string;
  saleProduct: string;
  localisation: string;
}) {
  const { saleProducts, popularProducts } = await fetchProducts();

  return (
    <div>
      <TrendCarousel title={saleProduct} products={saleProducts} localisation={localisation}/>
      <TrendCarousel title={popularProduct} products={popularProducts} localisation={localisation}/>
    </div>
  );
}
