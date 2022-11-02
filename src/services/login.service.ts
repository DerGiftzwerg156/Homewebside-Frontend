import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterData} from "../entitys/RegisterData";
import {User} from "../entitys/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  standardUrl = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  public register(username: string, mail: string, password: string) {
    const registerData: RegisterData = new RegisterData(username, mail, password)
    this.http.post<RegisterData>(this.standardUrl + "/register", registerData)
  }

  public login(username: string, password: string){
    const user = new User(username, password)
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  public logout(){
    sessionStorage.clear()
  }
}
