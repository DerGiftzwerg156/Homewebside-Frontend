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
    const registerData: RegisterData = new RegisterData(mail, username, password)
    this.http.post<RegisterData>(this.standardUrl + "/register", registerData).subscribe(resp =>{
      console.log("Registrierung erfolgreich")
    })
  }

  public login(username: string, password: string){
    const user = new User(username, password)
    this.http.post<boolean>(this.standardUrl + "/login", user).subscribe(resp =>{
     if(resp.valueOf()){
       sessionStorage.setItem('user', JSON.stringify(user))
     }else {
       console.log("Fehler bei der Anmeldung")
     }
    })

  }

  public logout(){
    sessionStorage.clear()
  }
}
