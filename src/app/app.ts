import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { User } from "./user/user";
import { DUMMY_USERS } from '../dummy-users';
import { Tasks } from "./tasks/tasks"; 

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
  users = DUMMY_USERS;
  selectId =`u1`;
  onselectuser(id: string) {
    this.selectId = id;
  }
  onSelect(id: string) {
    console.log('Selected user ID:', id);
  }
}
