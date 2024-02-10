import { Component } from '@angular/core';
import { UserService } from './services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  page: number = 1;
  pageSize: number = 4;
  total: number = 0;

  
 
  constructor(private _user: UserService) {}

  userTableHeader: Array<{
    id: string;
    username: string;
    email: string;
    phone_no: string;
  }> = [];


  ngOnInit() {
    this.fetchUsers();
  }
  
  fetchUsers() {
    this._user.fetchUsers(this.page, this.pageSize).subscribe(
      (res: any) => {
        this.total = res.meta.itemCount;
        this.userTableHeader = res.data.map((item: any) => {
          let { id, email, username, phone_no } = item;
          return {
            id,
            email,
            username,
            phone_no,
          };
        });

      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  recievePageData(data: any) {
    this.page = data.page + 1;
    this.fetchUsers();
  }
}
