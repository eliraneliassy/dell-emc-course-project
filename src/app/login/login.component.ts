import { FeedbackComponent } from './../feedback/feedback.component';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }
  submit(form: NgForm) {
    this.authService.setUser(form.value.email);
  }

  openDialog() {
    this.dialog.open(FeedbackComponent, {
      width: '400px',
      height: '400px',
      data: { hello: 'Hello from login component' }
    }).afterClosed().subscribe((res) => console.log(res));
  }

}
