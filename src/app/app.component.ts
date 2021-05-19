import { Component } from '@angular/core';
import {User} from './models/User';
import {UserService} from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: string;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
  this.userService.searchSubject.subscribe((currentUser: string) => {
    this.currentUser = currentUser;
  });
  }
  logout(): void {
    this.userService.logoutUser();
  }
}
