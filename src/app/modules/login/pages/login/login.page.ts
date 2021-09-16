import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPageComponent implements OnInit {
  // using reactive forms (FormControll)
  // The [formControl] directive links the explicitly created FormControl instance
  // to a specific form element in the view, using an internal value accessor.
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  formBuilder = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get formEmail(): AbstractControl {
    return this.form.get('email')!;
  }
  get formPassword(): AbstractControl {
    return this.form.get('password')!;
  }

  onSubmit(): void {
    console.log('form: ', this.form.value);
  }
  onSubmitFB(): void {
    console.log('formBuilder: ', this.formBuilder.value);
  }
}
