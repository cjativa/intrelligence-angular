import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, ProfileDetails } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: ProfileDetails = {
    name:     '',
    about:    '',
    heading:  ''
  }

  constructor(private auth: AuthenticationService) { }

  updateProfile(){
    this.auth.updateProfile(this.details).subscribe(() => {
      (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    },
      (error) => {
        console.error(error);
      });
  }
}
