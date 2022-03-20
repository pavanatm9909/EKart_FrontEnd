import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EKartRoutingGuard } from '../app.routing-guard';
import { SellerLandingComponent } from './seller-landing-page/seller-landing.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProfileComponent } from './seller-home/seller-view-profile/seller-profile.component';
import { SellerProductsComponent } from './seller-home/products/seller-products/seller-products.component';
import { SellerViewOrderComponent } from './seller-home/seller-view-order/seller-view-order.component';
import { SellerAddProductsComponent } from './seller-home/products/seller-add-products/seller-add-products.component';
import { SellerChangePasswordComponent } from './seller-home/seller-change-password/seller-change-password.component';
import { SellerRegistrationComponent } from './seller-landing-page/seller-registration/seller-registration.component';
import { SellerLoginComponent } from './seller-landing-page/login/seller-login.component';
import { DftSellerVeiwProductsComponent } from './seller-home/deals-for-today/dft-seller-veiw-products/dft-seller-veiw-products.component';
import { DftSellerAddProductComponent } from './seller-home/deals-for-today/dft-seller-add-product/dft-seller-add-product.component';

const routes: Routes = [

  { path: 'seller', component: SellerLandingComponent, children: [
    {path: 'login', component: SellerLoginComponent},
    {path: 'register', component: SellerRegistrationComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ]},
  {
    path: 'sellerHome', component: SellerHomeComponent,canActivate:[EKartRoutingGuard], children: [
      { path: 'profile', component: SellerProfileComponent },
      { path: 'viewProducts', component: SellerProductsComponent },
      { path: 'viewOrders', component: SellerViewOrderComponent },
      { path: 'addProduct', component: SellerAddProductsComponent },
      { path: 'changePassword',component:SellerChangePasswordComponent },
      { path: 'dftViewMyProducts', component: DftSellerVeiwProductsComponent },
      { path: 'dftAddProducts', component: DftSellerAddProductComponent }
      
    ]
  },
  {path:'sellerRegistration',component:SellerRegistrationComponent},
  { path: '', redirectTo: '/applicationHome', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }