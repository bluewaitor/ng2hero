import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from '../services/user.service';
import {ArticleService} from '../services/article.service';
import {CommentService} from '../services/comment.service';
import {TodoService} from '../services/todo.service';
import {StarService} from '../services/star.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    UserService,
    ArticleService,
    CommentService,
    TodoService,
    StarService
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
