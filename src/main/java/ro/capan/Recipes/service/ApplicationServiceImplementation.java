package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.domain.SideDish;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("ApplicationServiceImplementation")
public class ApplicationServiceImplementation implements ApplicationService{
    private RecipeService recipeService;
    private SideDishService sideDishService;

    @Autowired
    ApplicationServiceImplementation(RecipeService recipeService, SideDishService sideDishService) {
        this.recipeService = recipeService;
        this.sideDishService = sideDishService;
    }

    @Override
    public List<MainCourse> getAllRecipes() {
        return recipeService.getAllRecipes();
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
}
