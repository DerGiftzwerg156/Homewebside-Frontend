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
import {DockModule} from 'primeng/dock';
import {MainComponent} from './UserSides/AssignmentShow/main.component';
import {AuthenticationGuard} from "./AuthenticationGuard";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserProfileComponent} from './UserSides/user-profile/user-profile.component';
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {DataViewModule} from "primeng/dataview";
import {TitleContainerComponent} from './ExtendedComponents/title-container/title-container.component';
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {MenubarModule} from "primeng/menubar";
import {LogoutComponent} from './core/logout/logout.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PasswordModule} from "primeng/password";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputSwitchModule} from "primeng/inputswitch";
import {KnobModule} from "primeng/knob";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {CheckboxModule} from "primeng/checkbox";
import {MessageService} from "primeng/api";
import {ActivateAccountComponent} from './core/activate-account/activate-account.component';
import {FooterComponent} from './core/footer/footer.component';
import {DatenschutzComponent} from './core/datenschutz/datenschutz.component';
import {AgbComponent} from './core/agb/agb.component';
import {ShopOverviewComponent} from './GenerellSides/shop-overview/shop-overview.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {NewsComponent} from './GenerellSides/news/news.component';
import {CarouselModule} from "primeng/carousel";
import {LandingPageComponent} from './GenerellSides/landing-page/landing-page.component';
import {AssignmentsOverviewComponent} from './admin/assignments-overview/assignments-overview.component';
import {TableModule} from "primeng/table";
import {AccordionModule} from "primeng/accordion";
import {ColorSettingsComponent} from './admin/color-settings/color-settings.component';
import {ProductCareComponent} from './admin/product-care/product-care.component';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    BootComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    UserProfileComponent,
    TitleContainerComponent,
    LogoutComponent,
    ActivateAccountComponent,
    FooterComponent,
    DatenschutzComponent,
    AgbComponent,
    ShopOverviewComponent,
    NewsComponent,
    LandingPageComponent,
    AssignmentsOverviewComponent,
    ColorSettingsComponent,
    ProductCareComponent,
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
    BrowserAnimationsModule,
    CardModule,
    DialogModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    PasswordModule,
    InputTextareaModule,
    InputSwitchModule,
    KnobModule,
    FileUploadModule,
    ToastModule,
    CheckboxModule,
    ConfirmDialogModule,
    CarouselModule,
    TableModule,
    InputNumberModule,
  ],
  providers: [AuthenticationGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
