import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './Services/Signup.service';
import { FormValidationService } from 'src/common/FormValidator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup = this.fb.group({
    Username: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    phoneNo: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupService: SignupService,
    private formValidator:FormValidationService
  ) {}

  ngOnInit() {}

  submitForm() {
  
    // this.router.navigate(['/Dashboard']);
    if (this.formValidator.hasErrors(this.signUpForm)) {
      console.log('Form has errors. API call will not be made.');
    
      // Optionally, you can handle the errors or show an error message to the user.
      return;
    }
    let userData={
      username:this.signUpForm.get('Username')?.value,
      email:this.signUpForm.get('Email')?.value,
      phone_no:this.signUpForm.get('phoneNo')?.value,
      password:this.signUpForm.get('password')?.value,
      role:"admin"
    }
    this.signupService.signUpCall(userData).subscribe(
      (response: any) => {
        console.log('Signup successful:', response);
        // Handle successful signup response, e.g., navigate to another page
      },
      (error: any) => {
        console.error('Signup error:', error.error);
        // Handle signup error, e.g., display an error message
      }
    );
  }

  signUpUser(userData: any): void {
 
  }
}
