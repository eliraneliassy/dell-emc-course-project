import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  constructor() { }

  getCart() {
    return this.cart$.asObservable();
  }

  addToCart(item: Item) {
    const newCart = this.cart$.getValue();
    newCart.push(item);

    this.cart$.next(newCart);
  }

  removeFromCart(item: Item) {
    const newCart = this.cart$.getValue();

    const index = newCart.findIndex(x => x._id === item._id);
    if (index > -1) {
      newCart.splice(index, 1);
    }

    this.cart$.next(newCart);
  }

  existInCart(item): boolean {
    return this.cart$.getValue().includes(item);
  }

  countItems() {
    return this.cart$.getValue().length;
  }
}
