import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class loginService {
  constructor(private http: HttpClient) {}
  login(email: string, password: string): any {
    try {
      let body: {
        email: string;
        password: string;
      } = {
        email,
        password,
      };
      const SignupVerify = '/auth/login';
      return this.http.post(SignupVerify, body);
    } catch (e) {
      return e;
    }
  }
}
