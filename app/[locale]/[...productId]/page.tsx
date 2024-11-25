import ProductHeader from "./_components/ProductHeader";
import ProductDetails from "./_components/ProductDetails";
import ProductDescription from "./_components/ProductDescription";
import { fetchOneProduct } from "@/app/api";
import { IOneProduct } from "@/types/types";

interface PageProps {
  params: {
    productId: string[];
    locale: string;
  };
}

const page = async ({ params }: PageProps) => {
  const oneProduct: IOneProduct = await fetchOneProduct(
    params.productId[params.productId.length - 1]
  );
  return (
    <div>
      <ProductHeader oneProduct={oneProduct}  localisation={params.locale}/>
      <ProductDetails oneProduct={oneProduct} localisation={params.locale}/>
      <ProductDescription
        oneProduct={oneProduct}
        localisation={params.locale}
      />
    </div>
  );
};

export default page;
