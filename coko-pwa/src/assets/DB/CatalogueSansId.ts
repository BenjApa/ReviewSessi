import {Recipe} from "./Recipe";

export interface CatalogueSansId {
  id: number;
  name: string;
  description: string;
  //categories: Category[];
  recipes: Recipe[]
}
