import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./core/login/login.component";
import {RegisterComponent} from "./core/register/register.component";
import {MainComponent} from "./UserSides/AssignmentShow/main.component";
import {UserProfileComponent} from "./UserSides/user-profile/user-profile.component";
import {LogoutComponent} from "./core/logout/logout.component";
import {AuthGuardService} from "../services/auth-guard.service";
import {ActivateAccountComponent} from "./core/activate-account/activate-account.component";
import {DatenschutzComponent} from "./core/datenschutz/datenschutz.component";
import {AgbComponent} from "./core/agb/agb.component";
import {ShopOverviewComponent} from "./Shop/shop-overview/shop-overview.component";

const routes: Routes = [
  {path: '', component: ShopOverviewComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'agb', component: AgbComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'activateAccount', component: ActivateAccountComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
