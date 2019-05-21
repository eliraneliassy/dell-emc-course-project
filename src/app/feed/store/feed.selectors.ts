import { FeedState } from './feed.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getFeedState = createFeatureSelector('feed');

export const getItems = createSelector(getFeedState,
    (feed: FeedState) => {
        return feed.items;
    });

export const getLoading = createSelector(getFeedState,
    (feed: FeedState) => {
        return feed.loading;
    });

