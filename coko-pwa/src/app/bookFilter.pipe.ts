import {Pipe, PipeTransform} from '@angular/core';
import {Catalogue} from "../assets/DB/Catalogue";

@Pipe({
  name: 'BookTitlefilter'
})

export class BookTitlefilter implements PipeTransform {
  transform(items: Catalogue[], searchText: string): Catalogue[] {
    if(!items) return [];
    if(!searchText) {
      return items;
    }else {
      searchText = searchText.toLowerCase();
      return items.filter( book => {
        return book.name.toLowerCase().includes(searchText);
      });
    }
  }
}



