import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'manage',
    component: ManageComponent,
  },
  {path: 'register', component: RegisterComponent},
  {path: 'shop/:search', component: ShopComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'ShoppingCart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
