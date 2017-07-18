import {NgModule} from '@angular/core';

import {TodoRoutingModule} from './todo-routing.module';
import {SharedModule} from '../../shared/shared.module';

import {TodoComponent} from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    TodoRoutingModule,
    SharedModule
  ],
  declarations: [TodoComponent, TodoListComponent]
})
export class TodoModule {
}
