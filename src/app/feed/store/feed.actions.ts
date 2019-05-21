import { Action } from '@ngrx/store';
import { Item } from 'src/app/item.interface';

export enum FeedActionTypes {
  LoadFeeds = '[Feed] Load Feeds',
  LoadFeedsSuccess = '[Feed] Load Feeds Success',


}

export class LoadFeeds implements Action {
  readonly type = FeedActionTypes.LoadFeeds;
}

export class LoadFeedsSuccess implements Action {
  readonly type = FeedActionTypes.LoadFeedsSuccess;
  constructor(public payload: Item[]) { }
}


export type FeedActions = LoadFeeds | LoadFeedsSuccess;
