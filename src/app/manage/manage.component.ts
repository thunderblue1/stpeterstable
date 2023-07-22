import { Component, OnInit } from '@angular/core';
import { Bible } from '../models/bible.model';
import { BibleDTO } from '../models/bibleDTO.model';
import { BibleService } from '../service/bible.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  newBible: BibleDTO = {
    name: '',
    version: '',
    description: '',
    price: 0,
    productPhoto: '',
  }
  searchTerm: string = '';
  searchResults:Bible[]=[];
  constructor(private bibleService: BibleService) {
  }

  ngOnInit() {
    this.bibleService.getBibles(
      (bibles: Bible[])=> {
        this.searchResults = bibles;
      }
    );
  }
  onCreate() {
    this.bibleService.createBible(this.newBible,
      ()=>{
        this.searchTerm = '';
        this.onSearch();
      }
    );

  }
  onSearch() {
    console.log("Value of bibleService:"+this.bibleService)
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
  onDelete(id: number) {
    this.bibleService.deleteBible(id,
      ()=>{
        this.searchTerm = '';
        this.onSearch();
      }
    );
  }
  onEdit(bible:Bible) {
    this.bibleService.editBible(bible,
      ()=> {
        this.searchTerm = '';
        this.onSearch();
      }
    );
  }
}
