export interface Product {
  _id: string;
  title: string;
  price: string;
  discount: number;
  image: string;
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
