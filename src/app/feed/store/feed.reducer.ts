import { FeedActionTypes, FeedActions } from './feed.actions';
import { Action } from '@ngrx/store';
import { Item } from 'src/app/item.interface';

export interface FeedState {
  items: Item[];
  page: number;
  loading: boolean;
}


export const initialState: FeedState = {
  items: [],
  page: 0,
  loading: false
};

export function reducer(state = initialState, action: FeedActions): FeedState {
  switch (action.type) {

    case (FeedActionTypes.LoadFeeds): {
      return { ...state, loading: true };
    }

    case (FeedActionTypes.LoadFeedsSuccess): {
      return { ...state, loading: false, items: action.payload };
    }

    default:
      return state;
  }
}
