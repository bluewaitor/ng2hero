import {Component, OnInit, DoCheck} from '@angular/core';
import {AuthService} from './services/auth.service';
// import {ChatService} from './services/chat.service';
@Component({
  selector: 'app-root',
  template: `
    <banner [loggedIn]="loggedIn" [user]="user"></banner>
    <router-outlet></router-outlet>
    <loading></loading>
  `,
  styleUrls: ['./app.component.scss'],
  providers: [AuthService, /*ChatService*/],
})
export class AppComponent implements OnInit, DoCheck {
  loggedIn: boolean = false;
  user;

  constructor(private _authService: AuthService, /*private _chatService: ChatService*/) {
  }

  ngOnInit() {
    this.loggedIn = this._authService.loggedIn();

    if (this.loggedIn) {
      this.user = this._authService.getUserInfo().user;
    } else {
      this.user = {};
    }
    /*this._chatService.sendMessage('hello ');
    this._chatService.getMessage().subscribe(data => {
      console.log(data);
    });*/
  }

  ngDoCheck(): void {
    this.loggedIn = this._authService.loggedIn();
    if (this.loggedIn) {
      this.user = this._authService.getUserInfo().user;
    } else {
      this.user = {};
    }
  }

}
