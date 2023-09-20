import { Component, OnInit } from '@angular/core';

import { Route, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router,private auth:AuthService){}
 

  title = 'angular-ecommerce';
  // ngOnInit(): void {
  //   this.router.events.subscribe((val=>){
  //     if(val.url){
  //       if(this.auth.login())
  //     }
  //   })
  // }
}
