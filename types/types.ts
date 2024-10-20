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
  mealDetails: {
    weight: string;
  };
  discount: number;
  image: string;
  score: string | null;
}
export interface Product {
  products: ProductDetails[];
  page: number;
  lenBtns: number;
}
export interface ProductDetails {
  _id: string;
  title: string;
  productType: string;
  price: {
    $numberDecimal: string;
  };
  mealDetails: {
    weight: string;
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

export interface IOneProduct {
  _id: string;
  brand: string;
  productType: string;
  description: string;
  title: string;
  animalType: string;
  price: { $numberDecimal: string };
  catId: string;
  discount: number;
  image: string;
  mealDetails: {
    _id: string;
    age: string;
    weight: string;
    aroma: string;
  };
  accessoryDetails: string | null;
  toyDetails: string | null;
  selfCareDetails: string | null;
  clickCount: number;
  orderCount: number;
}
