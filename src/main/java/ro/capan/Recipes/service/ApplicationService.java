package ro.capan.Recipes.service;

import ro.capan.Recipes.domain.FirstCourse;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.domain.SideDish;

import java.util.List;
import java.util.Map;

public interface ApplicationService {
    List<MainCourse> getAllRecipes();
    List<FirstCourse> getAllFirstCourses();
    MainCourse getRecipeById(Long id);
    void addRecipe(MainCourse mainCourse);
    void deleteRecipeById(Long id);
    MainCourse updateRecipe(MainCourse mainCourse);
    Map<MainCourse,SideDish> getRecipe(Boolean meatless, Boolean oneDay);
    SideDish getSideDish(SideDish sideDish);
    FirstCourse getFirstCourse(Long firstCourseId);
    FirstCourse updateFirstCourse(FirstCourse firstCourse);
    void deleteFirstCourseById(long id);
    void addFirstCourse(FirstCourse firstCourse);
    FirstCourse getRandomFirstCourse();
}
