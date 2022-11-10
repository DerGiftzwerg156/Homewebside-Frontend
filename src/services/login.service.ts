import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDataRequest} from "../requestTypes/RegisterDataRequest";
import {Router} from "@angular/router";
import {LoginReply} from "../replyes/LoginReply";
import {LoginDataRequest} from "../requestTypes/LoginDataRequest";
import {Reply} from "../replyes/Reply";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // standardUrl = "http://192.168.178.105:8080"
  standardUrl = "http://localhost:8080"

  constructor(private http: HttpClient, private router: Router, private logger: LoggerService) {
  }

  public register(firstName: string, lastName: string, mail: string, password: string) {
    const registerData: RegisterDataRequest = new RegisterDataRequest(firstName, lastName, mail, password)
    this.http.post<Reply>(this.standardUrl + "/register", registerData).subscribe(resp => {
      this.logger.log("register", resp)
      this.router.navigate(['/login'])
    })
  }

  public login(username: string, password: string) {
    const user = new LoginDataRequest(username, password)
    this.http.post<LoginReply>(this.standardUrl + "/login", user).subscribe(resp => {
      if (resp.status) {
        console.log("login", resp)
        sessionStorage.setItem("firstName", resp.user.firstName)
        sessionStorage.setItem("lastName", resp.user.lastName)
        sessionStorage.setItem("mail", resp.user.mail)
        sessionStorage.setItem("password", JSON.stringify(resp.user.password))
        sessionStorage.setItem("role", resp.user.role)
        this.router.navigate(['/userloggedin'])
      } else {
        this.logger.log("login", resp)
      }

    })

  }

  public logout() {
    sessionStorage.clear()
  }
}
