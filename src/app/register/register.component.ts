import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  register() {
    this.loginService.register("Username", "test@test.de", "pw1234")
    console.log("Register")
  }
}
