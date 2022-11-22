import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.scss']
})
export class TitleContainerComponent implements OnInit {
  // @ts-ignore
  items: MenuItem[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
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
  }

  openProfile() {
    this.router.navigate(['/profile'])
  }

}
