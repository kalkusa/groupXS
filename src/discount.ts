import { Product } from './product';

export interface IDiscount {
  calculate(products: Product[]): number;
}
