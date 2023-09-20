import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
 
  GetAllProducts():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:7096/api/Products/GetAllProducts");
  }
  AddProduct(obj:any){
    return this.http.post<any>("https://localhost:7096/api/Products/Addproduct",obj);
  }
  AddToCart(cartobj:any){
    return this.http.post<any>("https://localhost:7096/api/Carts/add",cartobj);
  }
  getcartItem():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:7096/api/Carts");
  }
  deleteProduct(id:any){
    return this.http.delete("https://localhost:7096/api/AddProducts/$id}");
  }
  deleteCartItem(id:number){
    return this.http.delete("https://localhost:7096/api/Carts/Delete");
  }
  login(loginobj:any){
    return this.http.post<any>("https://localhost:7096/api/Users/authenticate",loginobj);
  }
  Signup(signupobj:any){
    return this.http.post<any>("https://localhost:7096/api/Users/register",signupobj);
  }
  updatequantity(item:any){
    return this.http.put("https://localhost:7096/api/Carts/update-quantity/",item);
  }
}
