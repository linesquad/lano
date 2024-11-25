import React from "react";
import { fetchByCatId } from "../../../api/index";
import SingleItemDisplay from "../_components/SingleItemDisplay";

const Page = async ({
  params,
}: {
  params: { SubCatId: string[]; locale: string };
}) => {
  const locale = params.locale;
  const id = params.SubCatId[2];
  const response = await fetchByCatId(id, 1);
  if (!response || !response.products || response.products.length === 0) {
    return (
      <h1 className="w-[70%] font-medium text-[#000] text-center">
        No Products found !
      </h1>
    );
  }
  const { products } = response;
  return (
    <div className="p-5 w-full">
      <div className="grid grid-cols-3 gap-6 tiny:grid-cols-2 smaller:grid-cols-2 md:grid-cols-4">
        {products.map((item) => (
          <div key={item._id} className="tiny:max-w-[157px] tiny:max-h-[233px]">
            <SingleItemDisplay item={item} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
