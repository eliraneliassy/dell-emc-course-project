import { Component, OnInit } from '@angular/core';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  items: Item[] = [];
  cart: Item[] = [];
  color = 'yellow';
  page = 0;
  loading = false;
  constructor(
    private feedService: FeedService,
    private cartService: CartService,
    private router: Router) {
  }


  ngOnInit(): void {
    this.feedService.getFeed().subscribe((res: Item[]) => {
      this.items = res;
    });

    this.cartService.getCart().subscribe((res: Item[]) => {
      this.cart = res;
    });

  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  existInCart(item): boolean {
    return this.cartService.existInCart(item);
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

  goToProduct(item: Item) {
    // this.router.navigateByUrl(`/product/${item._id}`);
    this.router.navigateByUrl('/product/' + item._id + '?name=eliran');
    this.router.navigate(['/product', item._id], { queryParams: { name: 'eliran' } });
  }

}
