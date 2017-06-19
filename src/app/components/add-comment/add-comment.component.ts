import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  comment;
  @Output() addComment = new EventEmitter();
  @Input() id;
  @Input() replyTo;

  constructor() {
  }

  ngOnInit() {
  }

  commentBtnClick() {
    if (!this.comment) {
      return alert('评论不能为空');
    }
    this.addComment.emit({comment: this.comment, id: this.id, user: this.replyTo});
    this.comment = '';
  }

}
