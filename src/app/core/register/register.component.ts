import {Component, OnInit} from '@angular/core';
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
  passwordConfirm?: string;

  constructor(private authService: AuthService, private router: Router,private logger: LoggerService) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.comparePasswords()) {
      this.authService.register(new RegisterDataRequest(this.firstName, this.lastname, this.mail, this.password));
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  comparePasswords() {
    console.log(this.password === this.passwordConfirm)
    if (this.password === this.passwordConfirm) {
      return true;
    } else {
      this.logger.showError("Fehler", "Die Passwörter stimmern nicht überein.");
      return false;
    }
  }
}
