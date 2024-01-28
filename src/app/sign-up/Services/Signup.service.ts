// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  signUpCall(userData: any): any {
    try {
      const signupURL = '/auth/sign-up';

      return this.http.post(signupURL, userData);
    } catch (e) {}
  }
}
