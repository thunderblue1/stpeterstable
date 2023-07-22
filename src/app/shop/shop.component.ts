import { Component, OnInit } from '@angular/core';
import { Bible } from '../models/bible.model';
import { BibleService } from '../service/bible.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  searchTerm: string = '';
  cart: Bible[] = [];
  searchResults:Bible[]=[];
  constructor(private bibleService:BibleService,private route: ActivatedRoute){
    if(sessionStorage.getItem("sessionCart")===null){
      sessionStorage.setItem("sessionCart",JSON.stringify(this.cart));
    } else {
      this.cart = JSON.parse(sessionStorage.getItem("sessionCart")!);
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.searchTerm=params.get("search")||'';
      this.onSearch();
    });
    console.log("Search Term: "+this.searchTerm);

  }

  onSearch() {
    if(this.searchTerm!='') {
      this.bibleService.searchBibles(this.searchTerm,
        (bibles: Bible[])=>{
          this.searchResults=bibles;
        }
      );
    } else {
      this.bibleService.getBibles(
        (bibles: Bible[])=> {
          this.searchResults = bibles;
        }
      );
    }
  }

  addToCart(item:Bible) {
    console.log("Item added to cart: "+item.name+", id:"+item.Id);
    this.cart.push(item);
    console.log("Cart has number of objects: "+this.cart.length);
    sessionStorage.setItem('sessionCart',JSON.stringify(this.cart));
  }
}
