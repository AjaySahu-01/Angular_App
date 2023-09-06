import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayForm!: FormGroup;
  products: any[] = [];
  // cartobj:any[] = [];
  cartobj:any={
  "Id": 0,
  "Product": 'Product',
  "Name": ' Name',
  "Price": 10.99,
  "Quantity": 1
};

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    
    this.listallproducts();
    this.addtocart();
  }

  listallproducts() {
    this.auth.GetAllProducts().subscribe(products => {
      this.products = products;
    });
  }
  addtocart(){
    
    this.auth.AddToCart(this.cartobj).subscribe(response => {
      this.products= response;
    });
  }
 
}


// if(response.response){
//   alert("Product Added To Cart!");
//   this.auth.cartAddedSubject.next(true);
// }



