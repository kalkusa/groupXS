import { Product } from './product';

export interface IDiscount {
  percentage: number;
  calculate(products: Product[]): Discount;
}

export class Discount {
  public products: Product[] = [];
  public percentage: number = 0;
}

export const twoDifferentPotterBooksDiscount: IDiscount = {
  percentage: 5,

  calculate(products: Product[]): Discount {
    const emptyResult = new Discount();
    if (!products) {
      return emptyResult;
    }

    const potterBooksWithoutDiscountApplied = products
      .filter(product => product.isDiscountAppliet === false)
      .filter(product => product.name.includes('HarryPotter: '));

    if (potterBooksWithoutDiscountApplied.length < 2) {
      return emptyResult;
    }

    const firstBook = potterBooksWithoutDiscountApplied[0];
    const secondBook = potterBooksWithoutDiscountApplied.find(
      book => book.guid !== firstBook.guid && book.name !== firstBook.name,
    );

    return {
      percentage: 5,
      products: [firstBook, secondBook],
    };
  },
};
