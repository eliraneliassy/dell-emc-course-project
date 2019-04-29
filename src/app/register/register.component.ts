import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });

    const obj = {
      userName: 'eliran',
      email: 'eliran@eliassy.dev',
    };
    this.form.patchValue(obj);

    this.form.controls.userName.valueChanges.subscribe(console.log);

  }

  submit() {
    console.log(this.form);
  }

}
