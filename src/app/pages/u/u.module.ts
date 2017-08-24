import {NgModule} from '@angular/core';
import {UserRoutingModule} from './u-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {UserComponent} from './user.component';
import {ProfileComponent} from './profile/profile.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {StarComponent} from './star/star.component';
import {ArticleComponent} from './article/article.component';
import {EditArticleComponent} from './article/edit-article.component';
import {MessageComponent} from './message/message.component';
@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    UserMenuComponent,
    UserSettingComponent,
    StarComponent,
    ArticleComponent,
    EditArticleComponent,
    MessageComponent
  ],
})
export class UModule {
}
