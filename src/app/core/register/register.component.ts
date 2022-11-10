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
    this.loginService.register(this.firstName, this.lastname, this.mail, this.password)
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
