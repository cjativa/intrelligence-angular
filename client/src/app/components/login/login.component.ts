import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email:    '',
    password: ''
  };


  constructor(private auth: AuthenticationService, private router: Router) {}

   login() {
     this.auth.login(this.credentials).subscribe(() => {
       this.router.navigateByUrl('/user/profile');
     },
    (error) => {
      console.error(error);
    });
   }


}