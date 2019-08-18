import { Basket } from './basket';
import { Product } from './product';

test('by default a basket should be empty', () => {
  const basket = new Basket();
  expect(basket.products.length).toBe(0);
});

test('basket should calculate base price properly', () => {
  const basket = new Basket();
  const product1 = new Product(1);
  const product2 = new Product(2);
  const product3 = new Product(3);
  basket.addProducts([product1, product2, product3]);
  expect(basket.products.length).toBe(3);
  expect(basket.getPrice()).toBe(6);
});

test('discounts sum should be zero when there are no discounts', () => {
  const basket = new Basket();
  expect(basket.getDiscountAmount()).toBe(0);
});
