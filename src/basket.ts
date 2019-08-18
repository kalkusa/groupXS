import { IDiscount } from './discount';
import { Product } from './product';

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

  public getDiscountAmount() {
    // return this.discounts.reduce((subtotal: number, discount: IDiscount) => {
    //   return subtotal + discount.calculate(this.products);
    // }, 0);
    //TODO
    return 0;
  }

  public getPriceAfterDiscount() {
    return this.getPrice() - this.getDiscountAmount();
  }
}
