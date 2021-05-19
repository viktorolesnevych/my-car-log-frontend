import {Component, Input, OnInit} from '@angular/core';
import {Log} from "../../models/Log";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() log: Log;
  constructor() { }

  ngOnInit(): void {
    this.log.commentList.forEach(comment => {
     const newDate: Date = new Date(comment.dateCreated);
     comment.dateCreated = (newDate.getMonth() + 1) + '.' + newDate.getDate() + '.' + newDate.getFullYear();
    });
  }

}
