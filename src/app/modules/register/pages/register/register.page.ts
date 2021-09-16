import { Component, OnInit } from '@angular/core';
import { IRegister } from '@modules/register/interfaces/register.interface';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPageComponent implements OnInit {
  // using template-driven forms (ngModel)
  // the source of truth is the template.
  // You do not have direct programmatic access to the FormControl instance

  form: IRegister = {
    fname: '',
    lname: '',
    birthday: '',
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('form: ', this.form);
  }
}
