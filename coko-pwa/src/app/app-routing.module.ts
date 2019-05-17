import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogueComponent} from "./catalogue/catalogue.component";
import {RecipeCreationComponent} from "./recipe-creation/recipe-creation.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {BookComponent} from "./book/book.component";
import {CatalogueCreationComponent} from "./catalogue-creation/catalogue-creation.component";

const routes: Routes = [
  {
    path: '', //default route on arrive sur la page d'accueil
    component : BookComponent //devrait être AppComponet // on peut aussi ajouter des recettes mais
                                    // elles seront mis dans le catalogue autre?
  },
  {
    path: 'books', //default route on arrive sur la page d'accueil
    component : BookComponent //devrait être AppComponet // on peut aussi ajouter des recettes mais
    // elles seront mis dans le catalogue autre?
  },
  {
    path: 'recipes',          //Afficher toutes les recettes
    component: RecipesComponent // On peut juste les consulter Recipes Pas de delete possible // exactement pareil
                                  // Catalogue.Component actuel
  },
  {
    path: 'books/create', //creer un nouveau catalogue
    component : CatalogueCreationComponent // normalement CatalogueCreationComponent (formulaire de création d'un catalogue)
  },
  {
    path: 'books/:id', // afficher le catalogue id c'est là qu'on a le lien pour ajouter une recette
    component : CatalogueComponent
  },
  {
    path: 'books/:id/create', // créer une recette dans le catalogue le catalogue id c'est là qu'on a le lien pour ajouter une recette
    component : RecipeCreationComponent //
  },

  {
    path: 'recipes/create',
    component: RecipeCreationComponent,
    //redirectTo : 'recipes'
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent
  },
  {
    path: 'recipes/delete/:id',
    //component : RecipeComponent
    redirectTo: 'recipes'
  },

  {
    path: '**',
    redirectTo: 'books'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
