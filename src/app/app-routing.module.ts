import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BootComponent} from "./core/boot/boot.component";
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {MainComponent} from "./main/main.component";
import {AuthenticationGuard} from "./AuthenticationGuard";

const routes: Routes = [
  {path: '', component: BootComponent},
  {path: 'boot', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
