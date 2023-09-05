import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular-ecommerce';
  cartProduct:any[]=[];
  constructor(private auth:AuthService){
this.auth.cartAddedSubject.subscribe(res=>{
  this.loadcart();
})
  }
  ngOnInit(): void {
    this.loadcart();
  }
  loadcart(){
    this.auth.getcartItem().subscribe((res:any)=>{
      this.cartProduct=res.data;
    })
  }
}
