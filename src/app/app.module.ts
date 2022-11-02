import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ButtonModule} from "primeng/button";
import {BootComponent} from './boot/boot.component';
import {ProgressBarModule} from "primeng/progressbar";
import {LoginComponent} from './login/login.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BootComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ProgressBarModule,
    FormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
