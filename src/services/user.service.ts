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

  standardUrl = "http://localhost:8080/user"

  constructor(private http: HttpClient, private logger: LoggerService, private authService: AuthService) {
  }

  deleteUser(deleteUserRequest: DeleteUserRequest) {
    this.http.post<Reply>(this.standardUrl + "/deleteUser", deleteUserRequest).subscribe(res => {
      this.logger.log("deleteUser", res)
      this.authService.logout()

    })
  }

  editUser(editUserRequest: EditUserRequest) {
    this.http.post<Reply>(this.standardUrl + "/editUser", editUserRequest).subscribe(res => {
      this.logger.log("editUser", res)
    })
  }

  changePassword(changePasswordRequest: ChangePasswordRequest) {
    this.http.post<Reply>(this.standardUrl + "/changePassword", changePasswordRequest).subscribe(res => {
      this.logger.log("changePassword", res)
    })
  }

  editAddress(editAddressRequest: EditAddressRequest) {
    this.http.post<Reply>(this.standardUrl + "/editAddress", editAddressRequest).subscribe(res => {
      this.logger.log("editAddress", res)
    })
  }

  getUserData() {
    return this.http.post<UserDataReply>(this.standardUrl + "/getUser", new StandardRequest(sessionStorage.getItem("token")!))
  }

}
