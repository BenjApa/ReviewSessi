import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../assets/DB/Recipe';
import { RecipeSansId } from '../assets/DB/RecipeSansId';


@Injectable()
export class RecipeService {

    constructor(private http: HttpClient) { }

    public addRecipe(newRecette: RecipeSansId): Observable<Recipe> {
        return this.https.post<Recipe>('http://51.38.236.246:3000/recipes/', newRecette);
       // return this.http.post<Recipe>('http://localhost:3000/recipes', newRecette);
    }
    public getRecipe(id: number): Observable<Recipe> {
        //this.messageService.add(`HeroService: fetched hero id=${id}`);
        //return this.https.get<Recipe>(`http://51.38.236.246:3000/recipe/${id}`);
        return this.https.get<Recipe>(`http://51.38.236.246:3000/recipes/${id}`);
        //return this.http.get<Recipe>(`http://localhost:3000/recipes/${id}`);
    }
    public getRecipes(): Observable<Recipe[]> {
        //return this.https.get<Recipe[]>(`http://51.38.236.246:3000/recipes/`);
        //return this.http.get<Recipe[]>(`http://localhost:3000/recipes`);
        return this.http.get<Recipe[]>(`http://51.38.236.246:3000/recipes/`);
    }
    public deleteRecipe(id: number): Observable<any> {
        return this.https.delete(`http://51.38.236.246:3000/recipes/${id}`);
       // return this.http.delete(`http://localhost:3000/recipes/${id}`);
    }

    /*getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }*/

}
