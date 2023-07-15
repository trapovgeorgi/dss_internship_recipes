import { Dispatch, SetStateAction, createContext } from "react";
import { Recipe } from "../interfaces/interfaces";

export const RecipesContext = createContext<{
  recipes: Array<Recipe>;
  setRecipes: Dispatch<SetStateAction<Recipe[]>> | null;
}>({ recipes: [], setRecipes: null });
