import { Component, OnInit } from '@angular/core';
import {User} from "../../entitys/User";


@Component({
  selector: 'app-user-logged-in',
  templateUrl: './user-logged-in.component.html',
  styleUrls: ['./user-logged-in.component.scss']
})
export class UserLoggedInComponent implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  mail: string | undefined;
  role: string | undefined;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.firstName = sessionStorage.getItem("firstName")
    // @ts-ignore
    this.lastName = sessionStorage.getItem("lastName")
    // @ts-ignore
    this.mail = sessionStorage.getItem("mail")
    // @ts-ignore
    this.role = sessionStorage.getItem("role")


  }

}
