export interface IPopularProducts {
  _id: string;
  title: string;
  price: {
    $numberDecimal: number;
  };
  discount: number;
  image: string;
  score: string;
}
