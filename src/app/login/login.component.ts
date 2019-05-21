import { UserLogin, UserLoginSuccess } from './../store/app.actions';
import { FeedbackComponent } from './../feedback/feedback.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private store: Store<any>) { }

  ngOnInit() {
    this.store.subscribe(console.log);
  }
  submit(form: NgForm) {
    // this.authService.setUser(form.value.email);
    // this.store.dispatch(new UserLogin());
    this.store.dispatch(new UserLoginSuccess(form.value.email));
  }

  openDialog() {
    this.dialog.open(FeedbackComponent, {
      width: '400px',
      height: '400px',
      data: { hello: 'Hello from login component' }
    }).afterClosed().subscribe((res) => console.log(res));
  }

}
