import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password: any;
  mail: any;
  lastname: any;
  firstName: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.loginService.register("Keno","Dirks", "test@test.de", "pw1234")
    console.log("Register")
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
