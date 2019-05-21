import { AppActionTypes } from './app.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private router: Router) { }

  @Effect({ dispatch: false })
  userLoginSuccess$ = this.actions$.pipe(
    ofType(AppActionTypes.UserLoginSuccess),
    tap(() => {
      this.router.navigateByUrl('/feed');
   })
  );

}
