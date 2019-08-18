import { Basket } from './basket';
import { fiveDifferentPotterBooksDiscount } from './discounts/fiveDifferentPotterBooksDIscount';
import { fourDifferentPotterBooksDiscount } from './discounts/fourDifferentPotterBooksDiscount';
import { threeDifferentPotterBooksDiscount } from './discounts/threeDifferentPotterBooksDiscount';
import { twoDifferentPotterBooksDiscount } from './discounts/twoDifferentPotterBooksDiscount';
import { Product } from './product';

test('by default a basket should be empty', () => {
  const basket = new Basket();
  expect(basket.products.length).toBe(0);
});

test('basket should calculate base price properly', () => {
  const basket = new Basket();
  const product1 = new Product(1, 1, 'product 1', false, '58036333-ce92-4225-8e18-094f3b7037f4');
  const product2 = new Product(2, 2, 'product 2', false, '80436efc-f4db-407c-b3af-77b033a7b20a');
  const product3 = new Product(3, 3, 'product 3', false, 'fb0f4cc3-6409-46a7-8a06-cdfb01c93e0e');
  basket.addProducts([product1, product2, product3]);
  expect(basket.products.length).toBe(3);
  expect(basket.getPrice()).toBe(6);
});

test('discounts sum should be zero when there are no discounts', () => {
  const basket = new Basket();
  expect(basket.applyDiscount()).toBe(0);
});

describe('algorithm should', () => {
  let firstBook: Product;
  let secondCopyOfFirstBook: Product;
  let secondBook: Product;
  let secondCopyOfSecondBook: Product;
  let thirdBook: Product;
  let secondCopyOfThirdBook: Product;
  let fourthBook: Product;
  let fifthBook: Product;
  let basket: Basket;

  beforeEach(() => {
    firstBook = new Product(8, 8, "Harry Potter: The Philosopher's Stone", false, 'f8280bd9-ec40-4347-a393-e15ade72aef9');
    secondCopyOfFirstBook = new Product(8, 8, "Harry Potter: The Philosopher's Stone", false, 'bb980948-f672-43c5-ae68-67d5be263037');
    secondBook = new Product(8, 8, 'Harry Potter: The Chamber of Secrets', false, '31fc7c90-7ff3-41f4-ab40-76c4508eef34');
    secondCopyOfSecondBook = new Product(8, 8, 'Harry Potter: The Chamber of Secrets', false, '8191d169-8590-4353-8fa1-1eba0c771770');
    thirdBook = new Product(8, 8, 'Harry Potter: The Prisoner of Azkaban', false, 'f23579fb-b089-46c5-b57a-2e70aa50cac1');
    secondCopyOfThirdBook = new Product(8, 8, 'Harry Potter: The Prisoner of Azkaban', false, '84fd52ab-4d81-4c69-a117-71ed8c040969');
    fourthBook = new Product(8, 8, 'Harry Potter: The Goblet of Fire', false, 'e0f6d1eb-3c32-4b29-9ea5-59a146e509bf');
    fifthBook = new Product(8, 8, 'Harry Potter: The Order of the Phoenix', false, '4f5c383c-44dd-4644-affa-9e8385ea7771');
  });

  test('work properly for the task example case', () => {
    basket = new Basket();

    basket.addProducts([
      firstBook,
      secondCopyOfFirstBook,
      secondBook,
      secondCopyOfSecondBook,
      thirdBook,
      secondCopyOfThirdBook,
      fourthBook,
      fifthBook,
    ]);
    basket.addDiscounts([
      twoDifferentPotterBooksDiscount,
      threeDifferentPotterBooksDiscount,
      fourDifferentPotterBooksDiscount,
      fiveDifferentPotterBooksDiscount,
    ]);
    expect(basket.products.length).toBe(8);
    expect(basket.getPriceAfterDiscount()).toBe(51.2);
  });

  test('work properly when 2 books discount is applied', () => {
    basket = new Basket();

    basket.addProducts([firstBook, secondBook]);
    basket.addDiscount(twoDifferentPotterBooksDiscount);

    expect(basket.products.length).toBe(2);
    expect(basket.getPriceAfterDiscount()).toBe(15.2);
  });

  test('work properly when 3 books discount is applied', () => {
    basket = new Basket();

    basket.addProducts([firstBook, secondBook, thirdBook]);
    basket.addDiscount(threeDifferentPotterBooksDiscount);

    expect(basket.products.length).toBe(3);
    expect(basket.getPriceAfterDiscount()).toBe(21.6);
  });

  test('work properly when 4 books discount is applied', () => {
    basket = new Basket();

    basket.addProducts([firstBook, secondBook, thirdBook, fourthBook]);
    basket.addDiscount(fourDifferentPotterBooksDiscount);

    expect(basket.products.length).toBe(4);
    expect(basket.getPriceAfterDiscount()).toBe(25.6);
  });

  test('work properly when 5 books discount is applied', () => {
    basket = new Basket();

    basket.addProducts([firstBook, secondBook, thirdBook, fourthBook, fifthBook]);
    basket.addDiscount(fiveDifferentPotterBooksDiscount);

    expect(basket.products.length).toBe(5);
    expect(basket.getPriceAfterDiscount()).toBe(30);
  });
});
