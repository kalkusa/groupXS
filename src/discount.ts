import { Product } from './product';

export interface IDiscount {
  percentage: number;
  calculate(products: Product[]): Discount;
}

export class Discount {
  public products: Product[] = [];
  public percentage: number = 0;
}
