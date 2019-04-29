import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { SuggestionsService, Suggestion } from '../suggestions.service';
import { Item } from '../item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  num = 0;

  itemsSearchResult: Item[];

  searchTerm$: Subject<string> = new Subject<string>();
  constructor(
    private cartService: CartService,
    private suggestion: SuggestionsService) { }

  ngOnInit() {
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

}
