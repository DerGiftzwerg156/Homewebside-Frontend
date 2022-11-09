import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dockItems: MenuItem[] | any;

  constructor() { }

  ngOnInit(): void {
    this.dockItems = [
      {
        label: 'Account',
        icon: "assets/images/profile.svg"
      },
      {
        label: 'Footballtips',
        icon: "assets/images/football.svg"
      },
      {
        label: '3DPrinterOrder',
        icon: "assets/images/3dPrinter.svg"
      }
    ];
  }

}
