import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupVerifyService } from './Services/signup-verify.service';
@Component({
  selector: 'app-signup-verify',
  templateUrl: './signup-verify.component.html',
  styleUrls: ['./signup-verify.component.css'],
})
export class SignupVerifyComponent {
  constructor(
    private route: ActivatedRoute,
    private signupVerifyService: SignupVerifyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      // Access route parameters here

      this.signupVerifyService.signupVerifyCall(params['AID']).subscribe(
        (response: { message: string }) => {
          console.log('Signup successful:', response);
          // Handle successful signup response, e.g., navigate to another page
        },
        (error: any) => {
          console.error('Signup error:', error.error);
          // Handle signup error, e.g., display an error message
        }
      );
      // You can perform actions based on the parameter value or update component properties.
    });
  }
}
