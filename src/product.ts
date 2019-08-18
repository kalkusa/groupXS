export class Product {
  constructor(
    public price: number,
    public discountedPrice: number,
    public name: string,
    public isDiscountApplied: boolean,
    public guid: string,
  ) {}
}
