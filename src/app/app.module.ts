import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ButtonModule} from "primeng/button";
import {BootComponent} from './core/boot/boot.component';
import {ProgressBarModule} from "primeng/progressbar";
import {LoginComponent} from './core/login/login.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RegisterComponent} from './core/register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './core/footer/footer.component';
import {DockModule} from 'primeng/dock';
import { MainComponent } from './main/main.component';
import {AuthenticationGuard} from "./AuthenticationGuard";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    BootComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ProgressBarModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    DockModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
