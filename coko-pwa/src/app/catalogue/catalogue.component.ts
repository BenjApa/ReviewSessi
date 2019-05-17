import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../assets/DB/Recipe";
import {RecipeService} from "../recipe.service";
import {Catalogue} from "../../assets/DB/Catalogue";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  @Input()
  book:Catalogue;

  allRecipes: Recipe[];
  searchText:string;
  id : number;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private catalogueService: CatalogueService) {
  }

  /*delRecipe(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe.id).subscribe(() => {
      this.recipeService.getRecipes().subscribe(recettes  => this.allRecipes = recettes);
    });
    console.log('One article was deleted');
  }*/
  delete(id:number){
    this.recipeService.deleteRecipe(id).subscribe(() => {
      this.recipeService.getRecipes().subscribe(recettes  => this.allRecipes = recettes);
    });
    console.log('One article was deleted');
  }
  /*getRecipes(id :number): void {

    this.recipeService.getRecipes()
      .subscribe(recipes => this.allRecipes = recipes);
  }*/

  getBook(): void {
    this.id= +this.route.snapshot.paramMap.get('id');
    this.catalogueService.getBook(this.id)
      .subscribe(catalogue => this.book = catalogue);
    this.allRecipes = this.book.recipes; //Quand on aura le back
    // for (let index = 0; index < this.book.recipes.length; index++){
    //   this.recipeService.getRecipe(this.book.recipes[index]).subscribe(recette => this.allRecipes.push(recette) );
    // }
  }
  getId(){
    return this.id;
  }


  ngOnInit() {
    // this.allArticles = this.articleService.getArticles();
    this.getBook();
  }

}
