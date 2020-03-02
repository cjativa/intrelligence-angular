import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  private key = '23c1ef3047d637837afdb5ffa4f50187';
  private name = 'Intrelligence';
  private expiration = '1day';
  private response_type = 'token';
  private return_url = 'http://localhost:8080/user/connect';

  authorize = 'https://trello.com/1/authorize?';
  auth_url = '';

  trello_connected: Boolean;

  constructor(private auth: AuthenticationService) { }

  passToken(token: String) {
    this.auth.connectTrelloAccount(token).subscribe((user) => {
      this.trello_connected = user.trello_connected;
    });
  }

  updateConnect() {
    this.auth_url = this.authorize + 'expiration=' + this.expiration +
      '&name=' + this.name +
      '&response_type=' + this.response_type +
      '&key=' + this.key +
      '&return_url=' + this.return_url;

    window.location.href = this.auth_url;
  }

  ngOnInit() {

    this.auth.connect().subscribe(user => {
      this.trello_connected = user.trello_connected;
    },
      (error) => {
        console.log(error);
      })

    if (window.location.hash) {

      // Extract fragment from the redirect URL
      let token = window.location.hash.substring(1);

      // Extract token value from the fragment
      token = token.substring(token.indexOf('=') + 1);

      // Clear out fragments in URL
      window.location.hash = '';

      // Send token for passing to server
      this.passToken(token);
    }
  }
}
