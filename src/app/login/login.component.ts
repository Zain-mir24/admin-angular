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
          let data={id:response.User.id,email:response.User.email,username:response.User.username}
          localStorage.setItem("login_info",JSON.stringify(data))
          localStorage.setItem("token",response.User.accessToken)
          this.router.navigate(['/Dashboard']);
        },
        (error: any) => {
          localStorage.clear()
          console.log(error)
        }
      );
    } catch (e) {}
  }
}
