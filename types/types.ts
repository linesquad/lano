export interface Product {
  products: ProductDetails[];
  page: number;
  lenBtns: number;
}
export interface ProductDetails {
  _id: string;
  title: string;
  price: {
    $numberDecimal: string;
  };
  currentPrice: string;
  image: string;
  discount: number;
}

export interface Category {
  _id: string;
  title: string;
  parentId: string | null;
  subCategory: [];
  products: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// export interface ILandingProducts {
//   _id: string;
//   title: string;
//   price: number;
//   currentPrice: string;

//   dFlag: boolean;
//   discount: number;
//   image: string;
//   score: string | null;
// }
// export interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   currentPrice: string;
//   image: string;
//   dFlag: boolean;
// }
