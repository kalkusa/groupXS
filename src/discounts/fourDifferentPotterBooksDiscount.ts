import { Discount, IDiscount } from '../discount';
import { Product } from '../product';

// Obviously it doesn't need to be so much repeated, but for the sake of showing that a discount can be completely unique rule it is
export const fourDifferentPotterBooksDiscount: IDiscount = {
  percentage: 20,

  calculate(products: Product[]): Discount {
    const emptyResult = new Discount();
    if (!products) {
      return emptyResult;
    }

    const potterBooksWithoutDiscountApplied = products
      .filter(product => product.isDiscountApplied === false)
      .filter(product => product.name.includes('Harry Potter: '));

    if (potterBooksWithoutDiscountApplied.length < 4) {
      return emptyResult;
    }

    const firstBook = potterBooksWithoutDiscountApplied[0];
    const secondBook = potterBooksWithoutDiscountApplied.find(
      book => book.guid !== firstBook.guid && book.name !== firstBook.name,
    );
    const thirdBook = potterBooksWithoutDiscountApplied.find(
      book =>
        book.guid !== firstBook.guid &&
        book.name !== firstBook.name &&
        book.guid !== secondBook.guid &&
        book.name !== secondBook.name,
    );

    const fourthBook = potterBooksWithoutDiscountApplied.find(
        book =>
          book.guid !== firstBook.guid &&
          book.name !== firstBook.name &&
          book.guid !== secondBook.guid &&
          book.name !== secondBook.name &&
          book.guid !== thirdBook.guid &&
          book.name !== thirdBook.name,
      );

    return {
      percentage: 20,
      products: [firstBook, secondBook, thirdBook, fourthBook],
    };
  },
};
