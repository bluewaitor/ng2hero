import {Injectable} from '@angular/core';
import { AuthHttp } from '../modules/auth';
import { usersUrl, meUrl } from './api';

@Injectable()
export class UserService {

  constructor(private http: AuthHttp) {
  }

  getAllUser(page): any {
    return this.http.get(usersUrl + '?page=' + page)
      .map(response => {
        return response.json().users
      })
  }

  getMe(): any{
    return this.http.get(meUrl)
      .map(response => {
        return response.json().user;
      })
  }

  changePassword(obj): any{
    return this.http.put(usersUrl + '/password', obj)
      .map(response=>{
        return response.json();
      });
  }
}
