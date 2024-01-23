// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environmentStage } from 'src/environments/environment.development';
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
