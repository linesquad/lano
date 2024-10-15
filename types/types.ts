
export interface ILandingProducts {
  _id: string;
  title: string;
  price: {
    $numberDecimal: number;
  };
  discount: number;
  image: string;
  score: string | null;
}
export interface Product {
  _id: string;
  title: string;
  price: number;
  currentPrice: string;
  image: string;
  dFlag: boolean;
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
