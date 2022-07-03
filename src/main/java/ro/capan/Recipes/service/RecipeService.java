package ro.capan.Recipes.service;

import ro.capan.Recipes.domain.MainCourse;

import java.util.List;

public interface RecipeService {
    List<MainCourse> getAllRecipes();
    MainCourse getRecipeById(Long id);
    void addRecipe(MainCourse mainCourse);
    void deleteRecipeById(Long id);
    MainCourse updateRecipe(MainCourse mainCourse);
    MainCourse getRecipe(Boolean meatless, Boolean oneDay);
}
