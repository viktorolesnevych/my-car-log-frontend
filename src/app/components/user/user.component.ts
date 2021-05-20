import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  brand: string;
  model: string;
  color: string;
  nickName: string;
  description: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.emailAddress === localStorage.getItem('currentUser')){
          this.user = user;
          console.log(user);
        }
      });
    });
  }

  addVehicle(){}
}
