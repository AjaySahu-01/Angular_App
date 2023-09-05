import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes = [
   {
    path:'cart',
    component:CartComponent
  },
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  {
    path:'add-product',
    component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
