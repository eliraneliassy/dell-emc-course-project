import { Action } from '@ngrx/store';

export enum AppActionTypes {
  UserLogin = '[App] User Login',
  UserLoginSuccess = '[App] User Login Success',
  UserLogout = '[App] User Logout'

}

export class UserLogin implements Action {
  readonly type = AppActionTypes.UserLogin;
}

export class UserLoginSuccess implements Action {
  readonly type = AppActionTypes.UserLoginSuccess;
  constructor(public payload: string) { }
}

export class UserLogout implements Action {
  readonly type = AppActionTypes.UserLogout;

}


export type AppActions = UserLogin | UserLoginSuccess | UserLogout;
