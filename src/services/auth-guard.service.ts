import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  // @ts-ignore
  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(res => {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login'])
        sessionStorage.clear()
        return false;
      } else {
        return true
      }
    })
  }
}
