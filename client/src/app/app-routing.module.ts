import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';

import { AuthGuardService } from './services/auth-guard.service';
import { ConnectComponent } from './components/connect/connect.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuardService] }
];

const userRoutes: Routes = [
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuardService], children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'account', component: AccountComponent },
    { path: 'connect', component: ConnectComponent },
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ],
  declarations: []
})
export class AppRoutingModule { }
