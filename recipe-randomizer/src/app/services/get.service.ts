import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainCourse} from "../utils/MainCourse";
import {RecipeFilters} from "../utils/RecipeFilters";
import {Recipe} from "../utils/Recipe";

@Injectable({
  providedIn: 'root'
})



export class GetService {
  private allRecipesUrl = 'http://localhost:8080/api/recipes';
  private updateRecipeUrl = 'http://localhost:8080/api/recipes/update';
  private removeRecipeUrl = 'http://localhost:8080/api/recipes/';
  private randomRecipeUrl = 'http://localhost:8080/api/randomRecipe';
  private firstCourseUrl = 'http://localhost:8080/api/firstCourse';
  private addRecipeUrl = 'http://localhost:8080/api/recipes/add';
  constructor(private httpClient: HttpClient) { }

  getAllRecipes() {
    return this.httpClient.get<MainCourse[]>(this.allRecipesUrl);
  }

  updateRecipe(recipe: MainCourse) {
    return this.httpClient.put(this.updateRecipeUrl, recipe, {responseType: 'text'});
  }

  removeRecipe(id: number) {
    return this.httpClient.delete(this.removeRecipeUrl + id, {responseType: 'text'});
  }

  getRecipe(recipeFilters: RecipeFilters) {
    return this.httpClient.get(this.randomRecipeUrl + '/' + recipeFilters.meatless + '/' + recipeFilters.oneDay);
  }

  addRecipe(recipe: MainCourse) {
    return this.httpClient.post(this.addRecipeUrl, recipe, {responseType: 'text'});
  }

  getRecipeById(id: number) {
    return this.httpClient.get(this.removeRecipeUrl + id);
  }

  getFirstCourse() {
    return this.httpClient.get(this.firstCourseUrl);
  }
}
