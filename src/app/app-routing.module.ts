import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BootComponent} from "./core/boot/boot.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";

const routes: Routes = [
  {path: '', component: BootComponent },
  {path: 'boot', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
