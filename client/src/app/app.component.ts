import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router) {}
}
