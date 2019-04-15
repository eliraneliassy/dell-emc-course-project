import { Component } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = [];
  cart: Item[] = [];
  constructor() {
    this.items = db;
  }

  addToCart(item: Item) {
    this.cart.push(item);
    console.log(this.cart);
  }

  removeFromCart(item: Item) {
    const arr = this.cart.filter(x => x._id === item._id);
    const index = this.cart.findIndex(x => x._id === item._id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    console.log(this.cart);
  }

  existInCart(item): boolean {
    return this.cart.includes(item);
  }

}
