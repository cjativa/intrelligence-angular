import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  trelloSync() {
    this.auth.trelloSync().subscribe(() => {
      (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit() {
    this.trelloSync();
  }

}
