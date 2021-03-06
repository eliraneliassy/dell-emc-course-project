import { LoadFeeds } from './store/feed.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item.interface';
import { FeedService } from '../feed.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getItems, getLoading } from './store/feed.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit, OnDestroy {
  

  items: Item[] = [];
  cart: Item[] = [];
  color = 'yellow';
  page = 0;
  loading = false;

  load$: Observable<boolean>;

  feedSubscption: Subscription;
  constructor(
    private feedService: FeedService,
    private cartService: CartService,
    private router: Router,
    private store: Store<any>) {
  }


  ngOnInit(): void {
    // this.feedSubscption = this.feedService.getFeed().subscribe((res: Item[]) => {
    //   this.items = res;
    // });

    this.store.dispatch(new LoadFeeds());

    this.store.select(getItems).subscribe((res) => {
      this.items = res;
    });

    this.load$ = this.store.select(getLoading);

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

  ngOnDestroy(): void {
    this.feedSubscption.unsubscribe();
  }

}
