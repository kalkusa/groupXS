import { IDiscount } from './discount';
import { Product } from './product';
import { BestDiscountCombinationFinder } from './bestDiscountCombinationFinder';

export class Basket {
  public products: Product[] = [];
  public discounts: IDiscount[] = [];

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public addProducts(products: Product[]) {
    this.products = [...this.products, ...products];
  }

  public addDiscount(discount: IDiscount) {
    this.discounts.push(discount);
  }

  public addDiscounts(discount: IDiscount[]) {
    this.discounts = [...this.discounts, ...discount];
  }

  public getPrice() {
    return this.products.reduce((subtotal: number, product: Product) => {
      return subtotal + product.price;
    }, 0);
  }

  public applyDiscount() {
    if (this.discounts.length === 1) {
      const discount = this.discounts[0].calculate(this.products);
      discount.products.forEach(product => {
        product.discountedPrice = Number((product.price * 0.01 * (100 - discount.percentage)).toFixed(1));
        product.isDiscountApplied = true;
      });
    }

    // TODO Find optimum discount combination
    const bestDiscountCombinationFinder = new BestDiscountCombinationFinder();
    bestDiscountCombinationFinder.getBestDiscountCombination(this.products, this.discounts);

    return 0;
  }

  public getPriceAfterDiscount() {
    this.applyDiscount();
    return this.products.reduce((subtotal: number, product: Product) => {
      return subtotal + product.discountedPrice;
    }, 0);
  }
}
