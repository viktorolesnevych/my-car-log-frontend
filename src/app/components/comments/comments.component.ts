import {Component, Input, OnInit} from '@angular/core';
import {Log} from '../../models/Log';
import {UserService} from '../../services/user/user.service';
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() log: Log;
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.log.commentList.forEach(comment => {
     const newDate: Date = new Date(comment.dateCreated);
     comment.dateCreated = (newDate.getMonth() + 1) + '.' + newDate.getDate() + '.' + newDate.getFullYear();
    });
    this.userService.getUsers().subscribe(response => this.users = response);
  }

  getUserName(comment: Comment, id: number): string{
    return this.users.filter(user => user.id === comment.user_id)[0].userName;
  }
}
