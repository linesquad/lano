export interface Product {
  _id: string;
  title: string;
  price: string;
  discount: number;
  image: string;
}

export interface SingleItemDisplayProps {
  title: string;
  image: string;
  price: string;
  discount: number;
}

export type AnimalType = "dogs" | "cats" | "birds";
