import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {TokenService} from './token.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private _tokenService: TokenService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this._tokenService.getToken();

    if (token && token.token) {
      const user = this._tokenService.getToken().decodeToken().user;
      if (!user.admin) {
        alert('你不是管理员');
        this._router.navigate(['article']);
      }
      return user.admin;
    }
    alert('你不是管理员');
    this._router.navigate(['article']);
    return false;
  }

}
