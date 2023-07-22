import { Pipe, PipeTransform } from '@angular/core';
import { Bible } from './models/bible.model';
import { BibleService } from './service/bible.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(private bibleService:BibleService){

  }
  bibles: Bible[]=[];
  transform(values: Bible[], searchTerm:string): Bible[] {
    return values;
  }
}
