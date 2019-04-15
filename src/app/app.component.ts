import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  items: Item[] = [];
  cart: Item[] = [];
  color = 'yellow';
  page = 0;
  loading = false;
  constructor(private feedService: FeedService) {
  }


  ngOnInit(): void {
    this.feedService.getFeed().subscribe((res: Item[]) => {
      this.items = res;
    });
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

  loadMore(event) {
    if (event) {
      this.page++;
      this.loading = true;
      this.feedService.getFeed(this.page).subscribe((newItems: Item[]) => {
        this.items = [...this.items, ...newItems];
        this.loading = false;
      });
    }
  }

}
