import { FeedService } from './../../feed.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FeedActionTypes, LoadFeedsSuccess } from './feed.actions';
import { switchMap, map } from 'rxjs/operators';
import { Item } from 'src/app/item.interface';



@Injectable()
export class FeedEffects {

  constructor(
    private actions$: Actions,
    private feedService: FeedService) { }

  @Effect()
  loadFeed$ = this.actions$.pipe(
    ofType(FeedActionTypes.LoadFeeds),
    switchMap(() => this.feedService.getFeed(0)),
    map((items: Item[]) => new LoadFeedsSuccess(items))
  );

}
