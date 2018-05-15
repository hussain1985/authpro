import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class AuthGuardAdmin implements CanActivate {
  constructor(
    private  router: Router,
    private authService: AuthService
  ){}

  canActivate(){
    if(this.authService.currentUser && this.authService.currentUser.admin)
      return true;

      this.router.navigate(['/no-access']);
      return false;

  }
}
