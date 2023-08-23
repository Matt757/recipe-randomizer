package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.repository.RecipeRepository;

import java.time.LocalDate;
import java.util.*;

import static java.lang.Math.abs;
import static java.time.temporal.ChronoUnit.DAYS;

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

    @Override
    public MainCourse getRecipe(Boolean meatLessDay, Boolean oneDay) {
        Random randomRecipe = new Random();
        LocalDate localDate = LocalDate.now();
        if (!meatLessDay) {
            if (!oneDay) {
                List<MainCourse> menu = recipeRepository.findAll();
                MainCourse mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                while (DAYS.between(mainCourse.getLastCooked(), localDate) < 7) {
                    mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                }
                return mainCourse;
            }
            else {
                List<MainCourse> menu = recipeRepository.findRecipesByNumberOfDays(1);
                MainCourse mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                while (DAYS.between(mainCourse.getLastCooked(), localDate) < 7) {
                    System.out.println(DAYS.between(localDate, mainCourse.getLastCooked()));
                    mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                }
                return mainCourse;
            }
        }
        else {
            if (!oneDay) {
                List<MainCourse> menu = recipeRepository.findRecipesByHasMeat(false);
                MainCourse mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                while (DAYS.between(mainCourse.getLastCooked(), localDate) < 7) {
                    System.out.println("eu incerc dar nu prea reusesc");
                    mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                }
                return mainCourse;
            }
            else {
                List<MainCourse> menu = recipeRepository.findRecipesByHasMeatAndNumberOfDays(false, 1);
                MainCourse mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                while (DAYS.between(mainCourse.getLastCooked(), localDate) < 7) {
                    System.out.println("eu incerc dar nu prea reusesc");
                    mainCourse = menu.get(randomRecipe.nextInt(menu.size()));
                }
                return mainCourse;
            }
        }
    }

    private int getPartialMenu(int counter, List<MainCourse> menu, Random randomRecipe) {
        int randomInt;
        MainCourse mainCourse;
        return counter;
    }
}
