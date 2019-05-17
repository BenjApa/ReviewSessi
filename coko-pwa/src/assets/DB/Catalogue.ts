import {Recipe} from "./Recipe";
import {Category} from "./Category";

export interface Catalogue {
  id: number;
  name: string;
  description: string;
  //categories: Category[];
  //recipes: Recipe[]
  recipes: Recipe[]
}
