import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.scss']
})
export class TitleContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openProfile() {
    this.router.navigate(['/profile'])
  }

}
