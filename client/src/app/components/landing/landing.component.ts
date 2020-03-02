import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { InfoBox1Component } from '../information-boxes/info-box-1/info-box-1.component';
import { InfoBox2Component } from '../information-boxes/info-box-2/info-box-2.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public auth: AuthenticationService) {
   }

  ngOnInit() {
  }

  Login() {

  }
}
