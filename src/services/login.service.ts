import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterDataRequest} from "../requestTypes/RegisterDataRequest";
import {Router} from "@angular/router";
import {LoginReply} from "../replyes/LoginReply";
import {LoginDataRequest} from "../requestTypes/LoginDataRequest";
import {Reply} from "../replyes/Reply";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  standardUrl = "http://192.168.178.105:8080"

  constructor(private http: HttpClient, private router: Router) {
  }

  public register(firstName: string, lastName: string, mail: string, password: string) {
    const registerData: RegisterDataRequest = new RegisterDataRequest(firstName, lastName, mail, password)
    this.http.post<Reply>(this.standardUrl + "/register", registerData).subscribe(resp => {
      this.router.navigate(['/login'])
    })
  }

  public login(username: string, password: string) {
    const user = new LoginDataRequest(username, password)
    this.http.post<LoginReply>(this.standardUrl + "/login", user).subscribe(resp => {
      console.log(resp)
    })

  }

  public logout() {
    sessionStorage.clear()
  }
}
