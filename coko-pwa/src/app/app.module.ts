import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CategoryComponent } from './category/category.component';
import {RecipeService} from "./recipe.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Titlefilter} from "./filter.pipe";
import {BookTitlefilter} from "./bookFilter.pipe";

import { RecipeCreationComponent } from './recipe-creation/recipe-creation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CatalogueCreationComponent } from './catalogue-creation/catalogue-creation.component';
import { RecipesComponent } from './recipes/recipes.component';
import { BookComponent } from './book/book.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    CatalogueComponent,
    CategoryComponent,
    Titlefilter,
    BookTitlefilter,
    RecipeCreationComponent,
    CatalogueCreationComponent,
    RecipesComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
