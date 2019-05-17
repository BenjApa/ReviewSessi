import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../assets/DB/Recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  allRecipes: Recipe[];
  searchText:string;
  constructor(private recipeService: RecipeService) {
  }

  delete(id:number){
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.recipeService.getRecipes().subscribe(recettes  => this.allRecipes = recettes);
    });
    console.log('One article was deleted');
  }
  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.allRecipes = recipes);
  }
  ngOnInit() {
    // this.allArticles = this.articleService.getArticles();
    this.getRecipes();
  }

}
