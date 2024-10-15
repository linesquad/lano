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
