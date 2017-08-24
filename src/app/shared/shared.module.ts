import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MarkedPipe} from './marked.pipe';
import {EllipsisPipe} from './ellipsis.pipe';
import {TabsModule} from '../components/tabs/tabs.module';

import {CommonAddArticleComponent} from '../components/add-article/common-add-article.component';
import {TreeComponent} from '../components/tree/tree.component';

import {PaginationComponent} from '../components/pagination/pagination.component';
import {CommentListComponent} from '../components/comment-list/comment-list.component';
import {AddCommentComponent} from '../components/add-comment/add-comment.component';

@NgModule({
  imports: [CommonModule, FormsModule, TabsModule],
  declarations: [
    MarkedPipe,
    EllipsisPipe,
    CommonAddArticleComponent,
    TreeComponent,
    PaginationComponent,
    CommentListComponent,
    AddCommentComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    TabsModule,
    MarkedPipe,
    EllipsisPipe,
    CommonAddArticleComponent,
    TreeComponent,
    PaginationComponent,
    CommentListComponent,
    AddCommentComponent
  ],
  providers: [],
})
export class SharedModule {
}
