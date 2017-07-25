import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'user-setting',
  templateUrl: 'user-setting.component.html',
  styleUrls: ['user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  oldPassword;
  newPassword;
  repeatPassword;
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  changePassword(oldPassword, newPassword, repeatPassword) {
    if(!oldPassword || !newPassword || !repeatPassword) {
      alert("密码不能为空");
      return;
    }
    if(newPassword != repeatPassword) {
      alert('新密码和重复新密码不一致');
      return;
    }

    this._userService.changePassword({oldPassword: oldPassword, newPassword: newPassword, repeatPassword: repeatPassword}).subscribe(data=>{
      this.oldPassword = '';
      this.newPassword = '';
      this.repeatPassword = '';
      if(data.success) {
        alert('修改成功');
      }else{
        alert(data.message);
      }
    })
  }
}
