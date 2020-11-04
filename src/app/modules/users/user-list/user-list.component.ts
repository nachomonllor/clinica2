import { Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['firstname', 'lastname', 'email'];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource<User>(users);
      });
  }
  onCreate() {
    
  }
}
