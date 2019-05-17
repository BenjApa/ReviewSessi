import {TypeRecipe} from "./TypeRecipe";
import {Ingredient} from "./Ingredient";
import {Step} from "./Step";

export interface RecipeSansId {
  name: string;
  creatorId: number;
  picture: string;
  calories: number;
  time: number;
  quantity: string;
  challenge: string;
  price: number;
  type: TypeRecipe[];
  tools: string[];
  ingredients: Ingredient[];
  steps: Step[];
}

