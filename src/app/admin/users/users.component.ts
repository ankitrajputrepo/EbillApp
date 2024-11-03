import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface User {
  consumerId: number;
  consumerEmail: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  editUser(userId: number): void {
    // Navigate to the edit user component (assuming you have routing set up)
  }
  
  deleteUser(userId: number): void {
    this.http.delete(`http://localhost:5112/api/Consumers/${userId}`)
      .subscribe(
        () => {
          // Refresh the user list after deletion
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user', error);
        }
      );
  }
  

  loadUsers(): void {
    this.http.get<User[]>('http://localhost:5112/api/Consumers') // Adjust the URL as necessary
      .subscribe(
        (data) => {
          this.users = data;
        },
        (error) => {
          console.error('Error fetching users', error);
        }
      );
  }
}
