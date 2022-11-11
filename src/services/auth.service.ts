import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDataRequest} from "../requestTypes/LoginDataRequest";
import {LoginReply} from "../replyes/LoginReply";
import {RegisterDataRequest} from "../requestTypes/RegisterDataRequest";
import {Reply} from "../replyes/Reply";
import {Router} from "@angular/router";
import {LoggerService} from "./logger.service";
import {AuthenticationGuard} from "../app/AuthenticationGuard";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = "http://localhost:8080/auth"

  constructor(private http: HttpClient, private router: Router, private logger: LoggerService) {
  }

  login(loginData: LoginDataRequest) {
    return this.http.post<LoginReply>(this.authUrl + "/login", loginData).subscribe(res => {
      if (res.status == false) {
        this.logger.log("login", res)
        alert(res.message)
      } else {
        this.logger.log("login", res)
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("name", res.firstName)
        sessionStorage.setItem("role", res.role)
        console.log(sessionStorage)
        this.router.navigate(["/main"])
      }
    }, error => {
      alert("Failure");
    })
  }

  register(registerData: RegisterDataRequest) {
    return this.http.post<Reply>(this.authUrl + "/register", registerData).subscribe(res => {
      if (res.status == false) {
        this.logger.log("register", res)
        alert(res.message)
      } else {
        this.logger.log("register", res)
        alert("Registration successful")
        this.router.navigate(['/login'])
      }
    }, err => {
      alert("Failure");
    })
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
}
