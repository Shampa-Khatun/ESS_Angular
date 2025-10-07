import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = DUMMY_USERS[0];
}
