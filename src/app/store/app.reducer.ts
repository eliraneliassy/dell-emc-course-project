import { AppActions, AppActionTypes } from './app.actions';
import { Action } from '@ngrx/store';


export interface State {
  userName: string;
  loading: boolean;
}

export const initialState: State = {
  userName: null,
  loading: false
};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {
    case (AppActionTypes.UserLogin): {
      return { ...state, loading: true };
    }
    case (AppActionTypes.UserLoginSuccess): {
      return { ...state, loading: false, userName: action.payload };
    }
    case (AppActionTypes.UserLogout): {
      return { ...state, userName: null };
    }
    default:
      return state;
  }
}
