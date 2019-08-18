import { Discount, IDiscount } from '../discount';
import { Product } from '../product';

export const twoDifferentPotterBooksDiscount: IDiscount = {
  percentage: 5,

  calculate(products: Product[]): Discount {
    const emptyResult = new Discount();
    if (!products) {
      return emptyResult;
    }

    const potterBooksWithoutDiscountApplied = products.filter(
      product => product.isDiscountApplied === false && product.name.includes('Harry Potter: '),
    );

    if (potterBooksWithoutDiscountApplied.length < 2) {
      return emptyResult;
    }

    const firstBook = potterBooksWithoutDiscountApplied[0];
    const secondBook = potterBooksWithoutDiscountApplied.find(book => book.guid !== firstBook.guid && book.name !== firstBook.name);

    return {
      percentage: 5,
      products: [firstBook, secondBook],
    };
  },
};
