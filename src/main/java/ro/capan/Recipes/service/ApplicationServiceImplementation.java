package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.FirstCourse;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.domain.SideDish;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("ApplicationServiceImplementation")
public class ApplicationServiceImplementation implements ApplicationService{
    private final RecipeService recipeService;
    private final SideDishService sideDishService;
    private final FirstCourseService firstCourseService;

    @Autowired
    ApplicationServiceImplementation(RecipeService recipeService, SideDishService sideDishService, FirstCourseService firstCourseService) {
        this.recipeService = recipeService;
        this.sideDishService = sideDishService;
        this.firstCourseService = firstCourseService;
    }

    @Override
    public List<MainCourse> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @Override
    public List<FirstCourse> getAllFirstCourses() {
        return firstCourseService.getAllFirstCourses();
    }

    @Override
    public MainCourse getRecipeById(Long id) {
        return recipeService.getRecipeById(id);
    }

    @Override
    public void addRecipe(MainCourse mainCourse) {
        recipeService.addRecipe(mainCourse);
    }

    @Override
    public void deleteRecipeById(Long id) {
        recipeService.deleteRecipeById(id);
    }

    @Override
    public MainCourse updateRecipe(MainCourse mainCourse) {
        return recipeService.updateRecipe(mainCourse);
    }

    @Override
    public Map<MainCourse,SideDish> getRecipe(Boolean meatless, Boolean oneDay) {
        MainCourse mainCourse = recipeService.getRecipe(meatless, oneDay);
        SideDish sideDish = null;
        if(mainCourse.getRequiresSideDish()) {
            sideDish = sideDishService.getSideDish(null);
        }
        Map<MainCourse, SideDish> fullRecipe = new HashMap<>();
        fullRecipe.put(mainCourse, sideDish);
        return fullRecipe;
    }

    @Override
    public SideDish getSideDish(SideDish sideDish) {
        return sideDishService.getSideDish(sideDish);
    }

    @Override
    public FirstCourse getFirstCourse(Long firstCourseId) {
        return firstCourseService.getFirstCourse(firstCourseId);
    }

    @Override
    public FirstCourse updateFirstCourse(FirstCourse firstCourse) {
        return firstCourseService.update(firstCourse);
    }

    @Override
    public void deleteFirstCourseById(long id) {
        firstCourseService.deleteFirstCourseById(id);
    }

    @Override
    public void addFirstCourse(FirstCourse firstCourse) {
        firstCourseService.addFirstCourse(firstCourse);
    }

    @Override
    public FirstCourse getRandomFirstCourse() {
        return firstCourseService.getRandomFirstCourse();
    }
}
