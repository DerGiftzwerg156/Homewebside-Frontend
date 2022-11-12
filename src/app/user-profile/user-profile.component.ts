import {Component, OnInit} from '@angular/core';
import {Adresse} from "../../entitys/Adresse";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {EditUserRequest} from "../../requestTypes/EditUserRequest";
import {EditAddressRequest} from "../../requestTypes/EditAddressRequest";
import {DeleteUserRequest} from "../../requestTypes/DeleteUserRequest";
import {LoggerService} from "../../services/logger.service";
import {PasswordChange} from "../../entitys/PasswordChange";
import {ChangePasswordRequest} from "../../requestTypes/ChangePasswordRequest";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  mail: string = "";
  role: string = "";

  address: Adresse = new Adresse(0, "", "", "", "");
  display: boolean = false;

  passwordChange: PasswordChange = new PasswordChange("", "", "");


  constructor(private router: Router, private userService: UserService, private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.getUserData()
  }

  home() {
    this.router.navigate(['/main'])
  }

  editUser() {
    this.userService.editUser(new EditUserRequest(sessionStorage.getItem("token")!, this.firstName, this.lastName, this.mail))
  }

  openChangePassword() {
    this.display = true;
  }

  saveNewPassword() {
    console.log(this.passwordChange.confirmPassword)
    console.log(this.passwordChange.newPassword)
    if (this.passwordChange.newPassword === this.passwordChange.confirmPassword) {
      this.userService.changePassword(new ChangePasswordRequest(sessionStorage.getItem("token")!, this.passwordChange.oldPassword, this.passwordChange.newPassword))
      this.display=false
    } else {
      alert("Bitte Eingaben überprüfen!")
    }
  }

  saveAddress() {
    this.userService.editAddress(new EditAddressRequest(sessionStorage.getItem("token")!, this.address.plz, this.address.ort, this.address.street, this.address.houseNumber, this.address.addressBonus))
  }

  deleteUser() {
    this.userService.deleteUser(new DeleteUserRequest(sessionStorage.getItem("token")!))
  }

  getUserData() {
    this.userService.getUserData().subscribe(res => {
      if (res.status) {
        this.firstName = res.firstName
        this.lastName = res.lastName
        this.mail = res.mail
        this.role = res.role
        this.address = new Adresse(res.plz, res.ort, res.street, res.houseNumber, res.addressBonus)
        this.logger.log("getUserData", res)
      } else {
        this.logger.log("getUserData", res)
      }
    })
  }

  checkPasswords() {
    if(this.passwordChange.newPassword === this.passwordChange.confirmPassword){
      console.log(true)
    }else console.log(false)
  }
}
