package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.repository.RecipeRepository;

import java.util.*;

@Service("RecipeServiceImplementation")
public class RecipeServiceImplementation implements RecipeService {
    private final RecipeRepository recipeRepository;

    @Autowired
    RecipeServiceImplementation(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @Override
    public List<MainCourse> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @Override
    public MainCourse getRecipeById(Long id) {
        return recipeRepository.getById(id);
    }

    @Override
    public void addRecipe(MainCourse mainCourse) {
        recipeRepository.save(mainCourse);
    }

    @Override
    public void deleteRecipeById(Long id) {
        recipeRepository.deleteById(id);
    }

    @Override
    public MainCourse updateRecipe(MainCourse mainCourse) {
        return recipeRepository.save(mainCourse);
    }

    /**
     * Generates 7 random recipes that have not been cooked in the past 2 weeks, including one without meat
     *
     * @param meatLessDay boolean value that is true if the user wants a meatless day
     * @return a list of recipes
     */
    @Override
    public MainCourse getRecipe(Boolean meatLessDay, Boolean oneDay) {
        Random randomRecipe = new Random();
        if (!meatLessDay) {
            if (!oneDay) {
                List<MainCourse> menu = recipeRepository.findAll();

                return menu.get(randomRecipe.nextInt(menu.size()));
            }
            else {
                List<MainCourse> menu = recipeRepository.findRecipesByNumberOfDays(1);
                return menu.get(randomRecipe.nextInt(menu.size()));
            }
        }
        else {
            List<MainCourse> menu = recipeRepository.findRecipesByHasMeat(false);
            return menu.get(randomRecipe.nextInt(menu.size()));
        }
    }

    /**
     * This method is called with a different counter
     *
     * @param counter      counts how many days have a meal set
     * @param menu         the list of recipes for the week
     * @param randomRecipe the value that gives the random recipes
     */
    private int getPartialMenu(int counter, List<MainCourse> menu, Random randomRecipe) {
        int randomInt;
        MainCourse mainCourse;
        return counter;
    }
}
