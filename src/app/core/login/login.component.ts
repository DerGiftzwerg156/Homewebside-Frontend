import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {mail: '', password: ''};

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.loginData.mail, this.loginData.password)
  }

  navigateToRegister() {
    this.router.navigate(['/register'])
  }
}
