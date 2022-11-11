import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {LoginDataRequest} from "../../../requestTypes/LoginDataRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mail: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(new LoginDataRequest(this.mail, this.password))
  }

  navigateToRegister() {
    this.router.navigate(['/register'])
  }
}
