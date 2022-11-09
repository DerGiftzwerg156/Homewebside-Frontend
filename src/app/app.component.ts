import {Component} from '@angular/core';
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';

  loggedIn() {
    sessionStorage.getItem('user')

    return false
  }
}
