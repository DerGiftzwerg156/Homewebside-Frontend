import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.loginService.register("Username", "test@test.de", "pw1234")
    console.log("Register")
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
