import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupVerifyService } from './Services/signup-verify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-verify',
  templateUrl: './signup-verify.component.html',
  styleUrls: ['./signup-verify.component.css'],
})
export class SignupVerifyComponent {
  constructor(
    private route: ActivatedRoute,
    private signupVerifyService: SignupVerifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      localStorage.setItem("token",params.AID)
      // Access route parameters here
      this.signupVerifyService.signupVerifyCall().subscribe(
        (response: { message: string }) => {
          this.router.navigate(['']);
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
