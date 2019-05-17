import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecipeSansId} from "../../assets/DB/RecipeSansId";
import {Step} from "../../assets/DB/Step";
import {TypeRecipe} from "../../assets/DB/TypeRecipe";
import {Ingredient} from "../../assets/DB/Ingredient";
import {Recipe} from "../../assets/DB/Recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-creation',
  templateUrl: './recipe-creation.component.html',
  styleUrls: ['./recipe-creation.component.css']
})
export class RecipeCreationComponent implements OnInit {

  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.fb.group({
      name: ['New Recipe', Validators.required ],
      calories: ['', Validators],
      time: ['', Validators],
      quantity: ['', Validators],
      challenge: ['', Validators],
      price: ['', Validators],
      type: ['', Validators],
      tools: ['', Validators],
      ingredients: ['', Validators.required],
      steps: ['', Validators.required]

    });
  }

  ngOnInit() {
  }
  createRecipe() {
    const formModel = this.recipeForm.value;
    const rawRecipe: RecipeSansId = <RecipeSansId>{
      name: formModel.name,
      //creatorId: formModel.;
      //picture: string;
      calories: formModel.calories,
      time: formModel.time,
      quantity: formModel.quantity,
      challenge: formModel.challenge,
      price: formModel.price,
      type: formModel.type,
      tools: formModel.tools,
      ingredients: formModel.ingredients,
      steps: formModel.steps
    };
    this.recipeService.addRecipe(rawRecipe).subscribe();

    // notif validation creation
  }

}
