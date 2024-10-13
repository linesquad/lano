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
