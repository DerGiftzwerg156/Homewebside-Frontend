import { Component, OnInit } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Du bist jetzt eingeloggt!")
  }

  navigateToRegister() {
    this.router.navigate(['/register'])
  }
}
