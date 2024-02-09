import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  fetchUsers(page: number, pageSize: number): any {
    try {
      // Create headers with Authorization header
      const headers = { Authorization: 'true' };
      // Include headers in the HTTP request
      const options = { headers: headers };
      const all_users = `/users/all?page=${page}&&pageSize=${pageSize}`;
      return this.http.get(all_users, options);
    } catch (e) {
      return e;
    }
  }
}
