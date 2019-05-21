import { State } from './app.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<State>('app');
export const getIsAuth = createSelector(
    getAppState, (state: State) => {
        return state.userName !== null;
    });

export const getUserName = createSelector(
    getAppState, (state: State) => {
        return state.userName;
    });



