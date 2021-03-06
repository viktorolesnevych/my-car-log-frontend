import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userName: string;
  public emailAddress: string;
  public password: string;
  public errorText: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.errorSubject.subscribe(errorText => this.errorText = errorText);
  }
  registerUser(): void {
    const newUser = {userName: this.userName, emailAddress: this.emailAddress, password: this.password};
    this.userService.registerUser(newUser);
  }
  ngOnDestroy(): void{
    this.userService.errorSubject.next('');
  }

}
