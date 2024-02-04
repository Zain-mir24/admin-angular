import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  fetchProducts(page: number, pageSize: number): any {
    try {
      // Create headers with Authorization header
      const headers = { Authorization: 'true' };
      // Include headers in the HTTP request
      const options = { headers: headers };
      const SignupVerify = `/Products?page=${page}&&pageSize=${pageSize}`;
      return this.http.get(SignupVerify, options);
    } catch (e) {
      return e;
    }
  }
}
