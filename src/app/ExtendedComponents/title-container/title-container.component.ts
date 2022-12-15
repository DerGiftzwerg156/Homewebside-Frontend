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
  itemsWhenAdmin!: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.itemsWhenLoggedIn = [
      {
        label: 'Shop',
        icon: 'pi pi-shopping-cart',
        routerLink: '/shop'
      },
      {
        label: 'News',
        icon: 'pi pi-bell',
        routerLink: '/news'
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        items: [{
          label: 'Einstellungen',
          icon: 'pi pi-cog',
          routerLink: '/profile',

        },
          {
            label: 'Meine Aufträge und Bestellungen',
            icon: 'pi pi-wallet',
            routerLink: '/main',
          },
          {
            label: 'Abmelden',
            icon: 'pi pi-lock',
            routerLink: '/logout'
          }]
      }
    ]

    this.itemsWhenAdmin = [
      {
        label: 'Shop',
        icon: 'pi pi-shopping-cart',
        routerLink: '/shop'
      },
      {
        label: 'News',
        icon: 'pi pi-bell',
        routerLink: '/news'
      },
      {
        label: 'Admin',
        icon: 'pi pi-id-card',
        items: [{
          label: 'Aufträge',
          icon: 'pi pi-briefcase',
          routerLink: '/assignmentOverview',

        },
          {
            label: 'Farbverwaltung',
            icon: 'pi pi-palette',
            routerLink: '/colorAdministration',

          },
          {
            label: 'Produktpflege',
            icon: 'pi pi-shopping-cart',
            routerLink: '/productCare',
          },
          {
            label: 'Newspflege',
            icon: 'pi pi-hashtag',
            routerLink: '/logout'
          }]
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        items: [{
          label: 'Einstellungen',
          icon: 'pi pi-cog',
          routerLink: '/profile',

        },
          {
            label: 'Meine Aufträge und Bestellungen',
            icon: 'pi pi-wallet',
            routerLink: '/main',
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
        label: 'Shop',
        icon: 'pi pi-shopping-cart',
        routerLink: '/shop'
      },
      {
        label: 'News',
        icon: 'pi pi-bell',
        routerLink: '/news'
      },
      {
        label: 'Login',
        icon: 'pi pi-lock-open',
        routerLink: '/login'
      }]
  }

  checkLogin() {
    return sessionStorage.getItem("token") != null;
  }

  checkAdmin() {
    return sessionStorage.getItem("role") === 'admin'
  }
}
