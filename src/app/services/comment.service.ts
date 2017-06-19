import { Injectable } from '@angular/core';
import { AuthHttp } from '../modules/auth';
import { CommentUrl } from './api';
@Injectable()
export class CommentService {

  constructor(private _http: AuthHttp) { }

  addComment(obj) {
    return this._http.post(CommentUrl.addComment, obj).map(res => {
      return res.json();
    });
  }
}
