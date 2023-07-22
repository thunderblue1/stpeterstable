import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bible } from '../models/bible.model';
import { BibleDTO } from '../models/bibleDTO.model';


@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor(private http: HttpClient) { }

  public searchResults: Bible[] = [];

  host = "http://localhost:5000";
  public getBibles(callback: (bibles:Bible[])=>void): void {
    this.http.get<Bible[]>(this.host+"/bibles").subscribe(
      (bibles:Bible[]) => {
        console.log(bibles);
        this.searchResults = bibles;
        callback(bibles);
      }
    );
  }

  public getBibleById(bibleNumber: number,callback:(bible:Bible[])=>void):void {
    this.http.get<Bible[]>(this.host+"/"+bibleNumber).subscribe(
      (bible: Bible[]) => {
        console.log(bible);
        this.searchResults = bible;
        callback(bible);
      }
    );
  }

  public searchBibles(searchTerm: String, callback:(bibles: Bible[])=>void):void {
    this.http.get<Bible[]>(this.host+"/bibles/search/"+searchTerm).subscribe(
      (bibles: Bible[]) => {
        this.searchResults = bibles;
        callback(bibles);
      }
    )
  }

  public createBible(bible: BibleDTO,callback:()=>void):void {
    this.http.post<BibleDTO>(this.host+"/bibles",bible).subscribe(
      (data)=>{
        console.log(data);
        callback();
      }
    );
  }

  public editBible(bible: Bible,callback:()=>void):void {
    this.http.put<Bible>(this.host+"/bibles",bible).subscribe(
      (data)=>{
        console.log(data);
        callback()
      }
    );
  }

  public deleteBible(id: number,callback:()=>void):void {
    this.http.delete(this.host+"/bibles/"+id).subscribe(
      (data) => {
        console.log(data);
        callback();
      }
    );
  }
}
