import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule, MatButtonModule } from '@angular/material';
import { AuthenticationService } from '../app/services/authentication.service';


import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AccountComponent } from './components/account/account.component';
import { ConnectComponent } from './components/connect/connect.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserSideMenuComponent } from './components/user-side-menu/user-side-menu.component';
import { InfoBox1Component } from './components/information-boxes/info-box-1/info-box-1.component';
import { InfoBox2Component } from './components/information-boxes/info-box-2/info-box-2.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    NavigationBarComponent,
    AccountComponent,
    ConnectComponent,
    UserPageComponent,
    UserSideMenuComponent,
    InfoBox1Component,
    InfoBox2Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
