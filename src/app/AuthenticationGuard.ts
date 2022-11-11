import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Reply} from "../replyes/Reply";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  url: string = "http://localhost:8080/auth/validateToken";

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.userIsLoggedIn();
  }

  private userIsLoggedIn(): boolean {
    this.http.post<Reply>(this.url, sessionStorage.getItem("token")).subscribe(res => {
      if (res.status) {
        return true;
      } else {
        alert(res.message);
        this.authService.logout();
        return false;
      }
    })
    return false;
  }
}
