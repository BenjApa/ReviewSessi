import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../assets/DB/Recipe";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../assets/DB/Ingredient";
import {Step} from "../../assets/DB/Step";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe:Recipe;
  @Output()
  deletedRecette: EventEmitter<Recipe> = new EventEmitter();

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  public typeToString(): string{
    let types:string = "";
    for(var i = 0; i< this.recipe.type.length; i++){
      if(i != this.recipe.type.length-1)
        types += this.recipe.type[i].name+", ";
      else
        types += this.recipe.type[i].name;
    }
    return types;
  }

  public getName(): string {
    let types : string = this.typeToString();
    if(types != '')
      return (types +' : ' + this.recipe.name);
    return this.recipe.name;
  }
  public getId(): number {
    return this.recipe.id;
  }
  public getChallenge(): string {
    return this.recipe.challenge;
  }
  public getPrice(): string {
    return this.recipe.price.toString();
  }
  public getTime(): string {
    return this.recipe.time.toString();
  }
  public getQty(): string {
    return this.recipe.quantity;
  }
  public getIngredients(): Ingredient[] {
    return this.recipe.ingredients;
  }
  public getStep(): Step[] {
    return this.recipe.steps;
  }

  public delete(): void {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe(() => {
      this.recipeService.getRecipes().subscribe();
    });
    console.log('One article was deleted');
  }


  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recette => this.recipe = recette);
  }


  ngOnInit() {
    this.getRecipe();
    /*this.route.params.subscribe( params => {
      if (params && params['id']) {
        this.recipeService.getRecipe(params['id']).subscribe(recette => this.recipe = recette);
      }
    })*/

  }


}


/*
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class ArticleComponent implements OnInit {
  @Input()
  recipe: Recipe;
  @Output()
  deletedRecipe: EventEmitter<Recipe> = new EventEmitter();
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  public getTitle(): string {
    return this.recipe.name;
  }
  public getId(): number {
    return this.recipe.id;
  }

  public delete(): void {
    this.deletedRecipe.emit(this.recipe);
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params && params['id']) {
        this.recipeService.getRecipe(params['id']).subscribe(recipe => this.recipe = recipe);
      }
    });
  }

}

 */
