import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.scss']
})
export class TitleContainerComponent implements OnInit {

  itemsWhenLoggedIn!: MenuItem[];
  itemsWhenLoggedOut!: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.itemsWhenLoggedIn = [
      {
        label: 'Profil',
        icon: 'pi pi-user',
        items: [{
          label: 'Einstellungen',
          icon: 'pi pi-cog',
          routerLink: '/profile',

        },
          {
            label: 'Abmelden',
            icon: 'pi pi-lock',
            routerLink: '/logout'
          }]
      }
    ]
    this.itemsWhenLoggedOut = [
      {
        label: 'Login',
        icon: 'pi pi-lock-open',
        routerLink: '/login'
      }]
  }

  checkLogin() {
    return sessionStorage.getItem("token") != null;
  }
}
