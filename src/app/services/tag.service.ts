import {Injectable} from '@angular/core';
import {AuthHttp} from '../modules/auth';
import {TagUrl} from './api';

@Injectable()
export class TagService {

  constructor(private http: AuthHttp) {
  }

  getTag(id): any {
    return this.http.get(TagUrl + '/' + id)
      .map(response => {
        return response.json();
      });
  }

  getTags(): any {
    return this.http.get(TagUrl)
      .map(response => {
        return response.json();
      });
  }

}
