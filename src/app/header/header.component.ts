import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SuggestionsService, Suggestion } from '../suggestions.service';
import { Item } from '../item.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/app.reducer';
import { getIsAuth, getUserName } from '../store/app.selectors';
import { UserLogout } from '../store/app.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  num = 0;

  itemsSearchResult: Item[];

  searchTerm$: Subject<string> = new Subject<string>();
  isAuth: boolean;

  user$: Observable<string>;
  constructor(
    private cartService: CartService,
    private suggestion: SuggestionsService,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit() {
    // this.authService.isAuth().subscribe(
    //   (isauth: boolean) => this.isAuth = isauth
    // );

    this.store.select(getIsAuth).subscribe((isAuth) => {
      this.isAuth = isAuth;
    });


    // this.user$ = this.authService.getUser();

    this.user$ = this.store.select(getUserName);

    this.cartService.getCart().subscribe(() =>
      this.num = this.cartService.countItems());

    this.searchTerm$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.suggestion.getSuggestions(term)),
        map((res: Suggestion) => res.items))
      .subscribe(console.log);
  }

  search(term: string) {
    this.searchTerm$.next(term);
  }

  numClicked() {
    this.router.navigateByUrl('/cart');
  }

  logout() {
    // this.authService.logout();
    this.store.dispatch(new UserLogout());
  }

}
