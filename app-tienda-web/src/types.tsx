export type Product = {
  id: number;
  brand: string;
  name: string;
  urlImg: string;
};

export interface Sanction {
  id?: string;
  idMarket: string;
  reports: Report[];
}
export interface Report {
  id: number;
  reason: string;
  status: string;
  dateAttended: Date;
  user: string;
  product: Product;
}
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
