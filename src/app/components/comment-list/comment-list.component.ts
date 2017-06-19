import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],

})
export class CommentListComponent implements OnInit {


  @Input() article;
  @Output() addComment = new EventEmitter();
  @Output() toggleLike = new EventEmitter();
  @ViewChild('input') input;
  replyTo = {};

  constructor() {
  }

  ngOnInit() {
  }

  commentItemClick(item) {
    this.replyTo = item.user;
  }

  ListAddComment(obj) {
    this.addComment.emit(obj);
  }



  resetReplyTo() {
    this.replyTo = {};
  }

  toggleLikeClick(article) {
    this.toggleLike.emit(article);
  }
}
