import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartProducts: any[] = [];
  FinalPrice:number=0;

  constructor(private auth: AuthService ,private router:Router) { }
  ngOnInit(): void {
    this. GetAllCartItem();
  }
  Deletecartitem(id:number){
    this.auth.deleteCartItem(id).subscribe(products => {
      console.log("Product Deleted Successfully!")
    });
  }

  GetAllCartItem(){
   
      this.auth.getcartItem().subscribe(products => {
        this.cartProducts = products;
        this.cartProducts.forEach(element=>{
          this.FinalPrice=this.FinalPrice+element.price;
        });
      });
  }
  redirectToSale(){
    this.router.navigateByUrl("add-product");

  }
}
