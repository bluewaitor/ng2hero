import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private _userService: UserService, private _authService: AuthService) {
  }

  user;

  ngOnInit() {
    this._userService.getMe()
      .subscribe(user => {
        this.user = user;
      });
  }

  logout() {
    this._authService.logout();
  }
}
