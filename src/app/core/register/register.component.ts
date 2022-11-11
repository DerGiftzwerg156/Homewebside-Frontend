import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {RegisterDataRequest} from "../../../requestTypes/RegisterDataRequest";
import {LoggerService} from "../../../services/logger.service";

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

  constructor(private authService: AuthService, private router: Router, private logger: LoggerService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(new RegisterDataRequest(this.firstName, this.lastname, this.mail, this.password));
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
