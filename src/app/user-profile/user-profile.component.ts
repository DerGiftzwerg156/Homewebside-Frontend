import { Component, OnInit } from '@angular/core';
import {Adresse} from "../../entitys/Adresse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  mail: string | undefined;
  password: string | undefined;
  role: string | undefined

  adresse: Adresse = new Adresse(0,"","","","");

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.adresse = new Adresse(26624,"Südbrookmerland", "Bernsteinstraße", "12","")
  }

  home() {
    this.router.navigate(['/main'])
  }

  saveProfile() {

  }

  changePassword() {

  }

  saveAdress() {

  }
}
