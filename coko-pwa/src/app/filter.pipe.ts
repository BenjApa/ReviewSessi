import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from '../assets/DB/Recipe';

@Pipe({
  name: 'Titlefilter'
})

export class Titlefilter implements PipeTransform {
  transform(items: Recipe[], searchText: string): Recipe[] {
    if(!items) return [];
    if(!searchText) {
      return items;
    }else {
      searchText = searchText.toLowerCase();
      return items.filter( recette => {
        return JSON.stringify(recette).toLowerCase().includes(searchText);
      });
    }
  }
}

