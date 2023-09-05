import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartProducts: any[] = [];
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this. redirectToSale();
  }


  redirectToSale(){
   
      this.auth.getcartItem().subscribe(products => {
        this.cartProducts = products;
      });
  }
}
