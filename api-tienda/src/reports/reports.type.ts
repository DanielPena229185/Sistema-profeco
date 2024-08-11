export interface CreateReportDto {
  reason: string;
  user: User;
  market: Market;
  product: Product;
}

export interface GetReportsByMarketDto {
  id: string;
  page: number;
  limit: number;
}

export interface ReportList {
  reports: Array<Report>;
}

export interface Report {
  id: string;
  reason: string;
  status: Status;
  dateAttended: string;
  user: User;
  market: Market;
  product: Product;
}

export enum Status {
  ATTENDED,
  UNATTENDED,
}

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

interface Market {
  id: string;
  name: string;
  urlImg: string;
}

interface Product {
  id: string;
  name: string;
  urlImg: string;
}
