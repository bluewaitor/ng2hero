import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todos;

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos(1);
  }

  getTodos(page) {
    this._todoService.getTodoByAdmin(page).subscribe(data => {
      if (data.success) {
        this.todos = data.todos;
      }
    })
  }

  pageChange(page) {
    this.getTodos(page);
  }

}
