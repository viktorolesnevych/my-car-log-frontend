import {Component, Input, OnInit} from '@angular/core';
import {Log} from '../../models/Log';
import {UserService} from '../../services/user/user.service';
import {User} from "../../models/User";
import {Comment} from "../../models/Comment";
import {VehiclesService} from "../../services/vehicles/vehicles.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() log: Log;
  users: User[];
  content: string;
  currentUser: User;

  newComment = false;
  constructor(private userService: UserService, private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    console.log(this.log);
    if (this.log.commentList) {
      this.log.commentList.forEach(comment => {
        const newDate: Date = new Date(comment.dateCreated);
        comment.dateCreated = (newDate.getMonth() + 1).toString() + '.' + newDate.getDate().toString() + '.' +
          newDate.getFullYear() +
          ' - (' + newDate.getHours().toString() + ':' + newDate.getMinutes().toString() + ')';
      });
    }
    this.userService.getUsers().subscribe(response => {
      this.users = response;
      if (localStorage.getItem('currentUser')) {
        this.currentUser = this.users.find(user => user.emailAddress === localStorage.getItem('currentUser'));
      }
    });
  }

  getUserName(comment: Comment, id: number): string{
    return this.users.filter(user => user.id === comment.user_id)[0].userName;
  }
  changeNewComment(): void{
    this.newComment = !this.newComment;
  }


  addComment(): void{
    let newComment;
    if (this.content) {
      newComment = {
        textContent: this.content,
      };
      this.vehicleService.addComment(this.log.vehicle_id, this.log.id, newComment).subscribe((response: Comment) => {
        const newDate: Date = new Date(response.dateCreated);
        response.dateCreated = (newDate.getMonth() + 1).toString() + '.' + newDate.getDate().toString() + '.' +
          newDate.getFullYear() +
          ' - (' + newDate.getHours() + ':' + newDate.getMinutes() + ')';
        this.log.commentList.push(response);
        this.content = '';
        this.changeNewComment();
      });
    }
    }
}
