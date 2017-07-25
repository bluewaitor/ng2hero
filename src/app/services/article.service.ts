import {Injectable} from '@angular/core';
import {AuthHttp} from '../modules/auth';
import {articlesUrl, dashboardArticlesUrl} from './api';

@Injectable()
export class ArticleService {


  constructor(private http: AuthHttp) {
  }


  getArticlesForDashboard(page): any{
    return this.http.get(dashboardArticlesUrl + '?page=' + page)
      .map(response => {
        return response.json().articles
      })
  }

  getAllArticle(page): any {
    return this.http.get(articlesUrl + '?page=' + page)
      .map(response => {
        return response.json();
      });
  }

  getMyArticles(): any {
    return this.http.get(articlesUrl + '/me')
      .map(response => {
        return response.json().articles
      })
  }

  getArticleById(id): any {
    return this.http.get(articlesUrl + '/' + id)
      .map(response => {
        return response.json().article;
      });
  }

  addArticle(obj): any {
    return this.http.post(articlesUrl, obj)
      .map(response => {
        return response.json();
      })
  }

  editArticle(id, obj): any {
    return this.http.put(articlesUrl + '/' + id, obj)
      .map(response => {
        return response.json();
      });
  }
}
