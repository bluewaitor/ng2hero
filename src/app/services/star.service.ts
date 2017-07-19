import {Injectable} from '@angular/core';
import {AuthHttp} from '../modules/auth';
import {starUrl} from './api';

@Injectable()
export class StarService {

  constructor(private http: AuthHttp) {
  }

  getMyStars(): any {
    return this.http.get(starUrl + '/me').map(response => {
      return response.json();
    });
  }

  addStar(title, url): any {
    return this.http.post(starUrl, {title: title, url: url}).map(response => {
      return response.json()
    });
  }

  patchVisits(id): any {
    return this.http.patch(starUrl + '/' + id, {}).map(response => {
      return response.json();
    });
  }
}
