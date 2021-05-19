import { Component } from '@angular/core';
import {User} from './models/User';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  constructor(private userService: UserService) {
    this.userService.searchSubject.subscribe((currentUser: User) => {
      this.currentUser = currentUser;
    });
  }
  logout(): void {
    this.userService.logoutUser();
  }
}
