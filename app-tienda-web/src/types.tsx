export type Product = {
  id: number;
  brand: string;
  name: string;
  urlImg: string;
};

export type Deal = {
  title: string;
  price: number;
  discount: number;
  date: Date;
  product: Product;
};

export type Comment = {
  date: string;
  rating: number;
  comment: string;
};
