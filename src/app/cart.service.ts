import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[] = [];
  constructor() { }

  addToCart(item: Item) {
    this.cart.push(item);
  }

  removeFromCart(item: Item) {
    const arr = this.cart.filter(x => x._id === item._id);
    const index = this.cart.findIndex(x => x._id === item._id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  existInCart(item): boolean {
    return this.cart.includes(item);
  }

  countItems() {
    return this.cart.length;
  }
}
