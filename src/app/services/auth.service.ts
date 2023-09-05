import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="https://localhost:7272/api/AddProducts/";
public cartAddedSubject=new Subject<boolean>();
  constructor(private http: HttpClient) { }
  GetAllProducts():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:7272/api/AddProducts/GetAllProducts");
  }
  getProduct(obj:any){
    return this.http.post<any>("https://localhost:7272/api/AddProducts/Addproduct",obj);
  }
  AddToCart(cartobj:any){
    return this.http.post<any>("https://localhost:7272/api/Cart/add",cartobj);
  }
  getcartItem():Observable<any[]>{
    return this.http.get<any[]>("https://localhost:7272/api/Cart")
  }
}