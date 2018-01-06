import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { AfService } from './providers/af.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
