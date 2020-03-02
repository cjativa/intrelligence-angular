import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { AuthenticationService, AccountDetails } from '../../services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountDetails: AccountDetails = {
    email: '',
    password: '',
    confirm_password: ''
  }

  constructor(private auth: AuthenticationService) { }

  updateAccount() {
    this.auth.updateAccount(this.accountDetails).subscribe(() => {
      (error) => {
        console.error(error);
      }
    })
  }

  ngOnInit() {
    this.auth.account().subscribe(user => {
      this.accountDetails = user;
      console.log(this.accountDetails);
    },
      (error) => {
        console.error(error);
      })
  }
}
