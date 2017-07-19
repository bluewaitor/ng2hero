import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  constructor(private _articleService: ArticleService) { }
  articles;
  ngOnInit() {
    this._articleService.getMyArticles().subscribe(res=>{
      this.articles = res;
    });
  }

}
