import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {CommentService} from '../../services/comment.service';
@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.component.html',
  styleUrls: ['article-detail.component.scss'],
  providers: [ArticleService, CommentService],
})
export class ArticleDetailComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _articleService: ArticleService, private _commentService: CommentService,
  ) {
  }

  article;

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    this._route.params.switchMap((params: Params) => {
      return this._articleService.getArticleById(params['id']);
    }).subscribe(article => {
      this.article = article;
    });
  }

  addComment(comment) {
    this._commentService.addComment({
      article: comment.id,
      comment: comment.comment,
      replyTo: comment.user && comment.user._id
    }).subscribe(res => {
      if (res.success) {
        this.getArticle();
      }
    });
  }

  // toggleLike(word) {
  //   if (word.isLike) {
  //     // 取消赞
  //     this._likeService.cancelLike({contentId: word._id, contentType: 'word'}).subscribe(res => {
  //       if (res.success) {
  //         this.words.docs = this.words.docs.map((v, i) => {
  //           if (v.id === word.id) {
  //             v.isLike = 0;
  //             v.likes = --v.likes;
  //             return v;
  //           }
  //           return v;
  //         });
  //       }
  //     });
  //   } else {
  //     // 点赞
  //     this._likeService.addLike({contentId: word._id, contentType: 'word'}).subscribe(res => {
  //       if (res.success) {
  //         this.words.docs = this.words.docs.map((v, i) => {
  //           if (v.id === word.id) {
  //             v.isLike = 1;
  //             v.likes = ++v.likes;
  //             return v;
  //           }
  //           return v;
  //         });
  //       }
  //     });
  //   }
  // }

}
