import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {LoggerService} from "../../../services/logger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {
  verificationCode: string = "";

  constructor(private authService: AuthService, private logger: LoggerService, private router: Router) {
  }

  ngOnInit(): void {
  }

  activateAccount(verificationCode: string) {
    this.authService.activateAccount(verificationCode).subscribe(res => {
      if (res.status) {
        this.router.navigate(["/login"])
        this.logger.showSuccess("Account erfolgreich activiert", res.message)
        this.logger.log("activateAccount", res)
      } else {
        this.logger.showError("Fehler", res.message)
        this.logger.log("activateAccount", res)
      }
    })

  }
}
