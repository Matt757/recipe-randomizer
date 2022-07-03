package ro.capan.Recipes.service;

import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.domain.SideDish;

import java.util.List;
import java.util.Map;

public interface ApplicationService {
    List<MainCourse> getAllRecipes();
    MainCourse getRecipeById(Long id);
    void addRecipe(MainCourse mainCourse);
    void deleteRecipeById(Long id);
    MainCourse updateRecipe(MainCourse mainCourse);
    Map<MainCourse,SideDish> getRecipe(Boolean meatless, Boolean oneDay);
    SideDish getSideDish(SideDish sideDish);
}
