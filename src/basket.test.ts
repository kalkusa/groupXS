import { Basket } from './basket';

test('by default a basket should be empty', () => {
  const basket = new Basket();
  expect(basket.products.length).toBe(0);
});
