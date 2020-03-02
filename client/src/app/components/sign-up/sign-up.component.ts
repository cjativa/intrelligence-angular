import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  credentials: TokenPayload = {
    email:    '',
    name:     '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  signUp() {
    this.auth.signUp(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/user/profile');
    },
      (error) => {
        console.log(error);
      });
  }

}
