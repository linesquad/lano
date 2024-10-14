import React from "react";
import { fetchProductById } from "../../api/index";
import { Product } from "@/types/types";
import SingleItemDisplay from "../SingleItemDisplay";

const Page = async ({ params }: { params: { SubCatId: string[] } }) => {
  const id = params.SubCatId[2];
  const products: Product[] = await fetchProductById(id);


  return (
    <div className="p-5 w-full">
      <div className="grid grid-cols-3 gap-6 tiny:grid-cols-2 smaller:grid-cols-2 md:grid-cols-4">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item._id}
              className="tiny:max-w-[157px] tiny:max-h-[233px]"
            >
              <SingleItemDisplay item={item} />
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Page;
