import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginService } from './services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _login: loginService
  ) {}

  ngOnInit() {}

  submitForm() {
    try {
      let email = this.loginForm.get('Email')?.value;
      let password = this.loginForm.get('password')?.value;
      this._login.login(email, password).subscribe(
        (response: any) => {
          console.log(response)
          this.router.navigate(['/Dashboard']);
        },
        (error: any) => {}
      );
    } catch (e) {}
  }
}
