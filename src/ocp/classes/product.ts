import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(
    public readonly name: string,
    public readonly price: number,
  ) {}
}
