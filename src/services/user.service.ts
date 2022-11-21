import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoggerService} from "./logger.service";
import {DeleteUserRequest} from "../requestTypes/DeleteUserRequest";
import {Reply} from "../replyes/Reply";
import {EditUserRequest} from "../requestTypes/EditUserRequest";
import {ChangePasswordRequest} from "../requestTypes/ChangePasswordRequest";
import {StandardRequest} from "../requestTypes/StandardRequest";
import {UserDataReply} from "../replyes/UserDataReply";
import {EditAddressRequest} from "../requestTypes/EditAddressRequest";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // standardUrl = window.location.origin+"/api/user"
  standardUrl = "http://localhost:8080/api/user"

  constructor(private http: HttpClient, private logger: LoggerService, private authService: AuthService) {
  }

  deleteUser(deleteUserRequest: DeleteUserRequest) {
    this.http.post<Reply>(this.standardUrl + "/deleteUser", deleteUserRequest).subscribe(res => {
      this.logger.log("deleteUser", res)
      this.logger.showSuccess("Profil erfolgreich gelöscht",res.message)
      this.authService.logout()
    })
  }

  editUser(editUserRequest: EditUserRequest) {
    this.http.post<Reply>(this.standardUrl + "/editUser", editUserRequest).subscribe(res => {
      this.logger.log("editUser", res)
      this.logger.showSuccess("Profil erfolgreich aktualisiert",res.message)
    })
  }

  changePassword(changePasswordRequest: ChangePasswordRequest) {
    this.http.post<Reply>(this.standardUrl + "/changePassword", changePasswordRequest).subscribe(res => {
      this.logger.log("changePassword", res)
      this.logger.showSuccess("Passwort erfolgreich geändert",res.message)
    })
  }

  editAddress(editAddressRequest: EditAddressRequest) {
    this.http.post<Reply>(this.standardUrl + "/editAddress", editAddressRequest).subscribe(res => {
      this.logger.log("editAddress", res)
      this.logger.showSuccess("Adresse erfolgreich geändert", res.message)
    })
  }

  getUserData() {
    return this.http.post<UserDataReply>(this.standardUrl + "/getUser", new StandardRequest(sessionStorage.getItem("token")!))
  }

}
