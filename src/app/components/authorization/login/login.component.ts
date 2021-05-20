import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailAddress: string;
  public password: string;
  public errorText: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.errorSubject.subscribe(errorText => this.errorText = errorText);
  }
  loginUser(): void {
    const user = {emailAddress: this.emailAddress, password: this.password};
    this.userService.loginUser(user);
    }
}
