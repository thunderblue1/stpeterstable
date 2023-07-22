import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageComponent } from './manage/manage.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BibleService } from './service/bible.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    ManageComponent,
    ShoppingCartComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BibleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
