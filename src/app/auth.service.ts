import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private router: Router) { }

  getUser(): Observable<string> {
    return this.user$.asObservable();
  }

  setUser(userName: string) {
    this.user$.next(userName);
    this.router.navigateByUrl('/feed');
  }

  isAuth(): Observable<boolean> {
    return this.getUser().pipe(
      switchMap((userName: string) => {
        const res = userName !== null;
        return of(res);
      })
    );
  }

  logout(){
    this.setUser(null);
    this.router.navigateByUrl('/');
  }
}
