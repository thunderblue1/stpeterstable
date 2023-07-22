import { Component } from '@angular/core';
import { Bible } from '../models/bible.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart: Bible[] = []

  constructor() {
    this.cart = JSON.parse(sessionStorage.getItem('sessionCart')!);
  }

  removeFromCart(item: Bible) {
    let index = this.cart.indexOf(item);
    this.cart.splice(index,1);
  }

  ngOnDestroy(){
    sessionStorage.setItem("sessionCart",JSON.stringify(this.cart));
  }
}
