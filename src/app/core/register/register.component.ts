import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {RegisterDataRequest} from "../../../requestTypes/RegisterDataRequest";
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  password: any;
  mail: any;
  lastname: any;
  firstName: any;
  passwordConfirm?: string;
  samePassword?: boolean;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
  }

  register() {
    this.primengConfig.ripple = true;
    if (this.comparePasswords()) {
      this.authService.register(new RegisterDataRequest(this.firstName, this.lastname, this.mail, this.password));
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  showErrorMessage(summary: string, message: string) {
    this.messageService.add({key: 'registerMessager', severity: 'error', summary: summary, detail: message});
  }

  comparePasswords() {
    console.log(this.password === this.passwordConfirm)
    if (this.password === this.passwordConfirm) {
      return true;
    } else {
      this.showErrorMessage("Fehler", "Die Passwörter stimmern nicht überein.");
      return false;
    }
  }
}
