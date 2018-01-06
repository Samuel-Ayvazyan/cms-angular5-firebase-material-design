import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public afService: AfService) { }

  ngOnInit() {
  }
  login(){
    this.afService.loginWithGoogle();
  }

}
