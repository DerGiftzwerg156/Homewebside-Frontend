import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDataRequest} from "../requestTypes/LoginDataRequest";
import {LoginReply} from "../replyes/LoginReply";
import {RegisterDataRequest} from "../requestTypes/RegisterDataRequest";
import {Reply} from "../replyes/Reply";
import {Router} from "@angular/router";
import {LoggerService} from "./logger.service";
import {StandardRequest} from "../requestTypes/StandardRequest";
import {ActivateAccountRequest} from "../requestTypes/ActivateAccountRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = window.location.origin+"/api/auth"
  // authUrl: string = "http://localhost:8080/api/auth"

  constructor(private http: HttpClient, private router: Router, private logger: LoggerService) {
  }

  login(loginData: LoginDataRequest) {
    return this.http.post<LoginReply>(this.authUrl + "/login", loginData).subscribe(res => {
      if (res.status == false) {
        this.logger.log("login", res)
        this.logger.showError("Fehler", res.message)
      } else {
        this.logger.log("login", res)
        this.logger.showSuccess("Erfolgreich angemeldet", res.message)
        sessionStorage.setItem("token", res.token);
        sessionStorage.setItem("name", res.firstName);
        sessionStorage.setItem("role", res.role);
        this.router.navigate(["/"])
      }
    }, error => {
      this.logger.showError("Error", "Leider ist ein Fehler aufgetreten, bitte erneut versuchen.")
      return false
    })
  }

  register(registerData: RegisterDataRequest) {
    return this.http.post<Reply>(this.authUrl + "/register", registerData).subscribe(res => {
      if (res.status == false) {
        this.logger.log("register", res)
        this.logger.showError("Fehler", res.message)
      } else {
        this.logger.log("register", res)
        this.logger.showSuccess("Erfolgreich Registriert", res.message)
        this.router.navigate(['/activateAccount'])
      }
    }, err => {
      this.logger.showError("Fehler", "Leider ist ein Fehler aufgetreten, bitte erneut versuchen.")
    })
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['/login']).then(res => {
      this.logger.showInfo("Erfolgreich ausgeloggt", "Sie wurden erfolgreich ausgeloggt, bis zum n??chsten mal.")
    })
  }

  public isAuthenticated() {
    const token = sessionStorage.getItem("token")!
    return this.http.post<Reply>(this.authUrl + "/validateToken", new StandardRequest(token))
  }

  activateAccount(verificationCode: string) {
    return this.http.post<Reply>(this.authUrl+"/activateAccount", new ActivateAccountRequest(verificationCode))
  }
}
