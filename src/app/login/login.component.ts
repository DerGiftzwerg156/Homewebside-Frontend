import { Component, OnInit } from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log("Du bist jetzt eingeloggt!")
  }
}
