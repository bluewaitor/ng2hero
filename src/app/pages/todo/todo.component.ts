import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  thing: string = '';
  unDone;
  done;
  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
    this.getDoneTodo(1);
    this.getUnDoneTodo(1);
  }

  // 未完成
  getUnDoneTodo(page) {
    this._todoService.getTodo(page, 0).subscribe((data) => {
      if (data.success) {

        this.unDone = data.todos;
      }
    })
  }

  // 已完成
  getDoneTodo(page) {
    this._todoService.getTodo(page, 1).subscribe((data) => {
      if (data.success) {
        this.thing = '';
        this.done = data.todos;
      }
    })
  }

  // 完成分页
  donePageChange(page) {
    this.getDoneTodo(page);
  }

  // 未完成分页
  unDonePageChange(page) {
    this.getUnDoneTodo(page);
  }

  // 添加todo
  addTodo() {
    this._todoService.addTodo(this.thing).subscribe((data) => {
      if (data.success) {
        this.thing = '';
        this.getUnDoneTodo(1);
      }
    })
  }

  todoChange(todo) {
    let status = 0;
    if (todo.status === 0) {
      status = 1;
    }

    this._todoService.updateTodoStatus(todo._id, status).subscribe((data) => {
      if (data.success) {
        this.getDoneTodo(1);
        this.getUnDoneTodo(1);
      }
    })
  }

  todoDelete(todo) {
    let isSure = confirm('确定要删除这个待办吗?');
    if (isSure) {
      this._todoService.deleteTodo(todo._id).subscribe((data) => {
        if (data.success) {
          this.getDoneTodo(1);
          this.getUnDoneTodo(1);
        }
      })
    }
  }
}
