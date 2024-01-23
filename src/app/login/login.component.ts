import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  submitForm() {
    console.log(this.loginForm.get('Email')?.value);
    // this.router.navigate(["/Dashboard"])
  }
}
