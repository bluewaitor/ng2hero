import {Injectable} from '@angular/core';
import {AuthHttp} from '../modules/auth';
import {TodoUrl} from './api';

@Injectable()
export class TodoService {

  constructor(private http: AuthHttp) {
  }

  getTodo(page, status): any {
    return this.http.get(TodoUrl.todo + '?page=' + page + '&status=' + status)
      .map(response => {
        return response.json()
      });
  }

  addTodo(thing): any {
    return this.http.post(TodoUrl.todo, {thing: thing})
      .map(response => {
        return response.json()
      })
  }

  updateTodoStatus(id, status): any {
    return this.http.patch(TodoUrl.todo + '/' + id + '/status', {status: status})
      .map(response => {
        return response.json()
      });
  }

  deleteTodo(id): any {
    return this.http.delete(TodoUrl.todo + '/' + id)
      .map(response => {
        return response.json();
    })
  }


}
