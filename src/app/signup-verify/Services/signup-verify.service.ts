// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SignupVerifyService {
  constructor(private http: HttpClient) {}
  signupVerifyCall(Token: string):any {
    try {
      // Create headers with Authorization header
      const headers = { Authorization: 'true' };
      // Include headers in the HTTP request
      const options = { headers: headers };
      const SignupVerify = '/auth/sign-up/confirm';
      return this.http.get(SignupVerify, options);
    } catch (e) {
      return e;
    }
  }
}
