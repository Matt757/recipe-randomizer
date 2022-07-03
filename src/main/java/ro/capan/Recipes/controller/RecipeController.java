package ro.capan.Recipes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ro.capan.Recipes.converter.MainCourseConverter;
import ro.capan.Recipes.converter.SideDishConverter;
import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.domain.SideDish;
import ro.capan.Recipes.dto.MainCourseDto;
import ro.capan.Recipes.dto.SideDishDto;
import ro.capan.Recipes.service.ApplicationService;
import ro.capan.Recipes.utils.FullRecipe;
import ro.capan.Recipes.utils.RecipeFilters;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api")
public class RecipeController {
    ApplicationService applicationService;

    @Autowired
    RecipeController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @RequestMapping(value = "/recipes", method = RequestMethod.GET)
    public ResponseEntity<List<MainCourseDto>> getAllRecipes() {
        return new ResponseEntity<>(applicationService.getAllRecipes().stream().map(MainCourseConverter::convertModelToDto).collect(Collectors.toList()), HttpStatus.OK);
    }

    @RequestMapping(value = "/recipes/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getRecipeById(@PathVariable long id) {
        try {
            return new ResponseEntity<>(MainCourseConverter.convertModelToDto(applicationService.getRecipeById(id)), HttpStatus.OK);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Recipe with id " + id + " does not exist.", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/recipes/add", method = RequestMethod.POST)
    public ResponseEntity<Object> addRecipe(@RequestBody MainCourseDto mainCourseDto) {
        applicationService.addRecipe(MainCourseConverter.convertDtoToModel(mainCourseDto));
        return new ResponseEntity<>("Recipe added successfully", HttpStatus.CREATED);
    }

    @RequestMapping(value = "/recipes/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteRecipeById(@PathVariable long id) {
        applicationService.deleteRecipeById(id);
        return new ResponseEntity<>("Object deleted", HttpStatus.OK);
    }

    @RequestMapping(value = "/recipes/update", method = RequestMethod.POST)
    public ResponseEntity<Object> updateRecipe(@RequestBody MainCourseDto mainCourseDto) {
        MainCourse mainCourse = applicationService.updateRecipe(MainCourseConverter.convertDtoToModel(mainCourseDto));
        if(mainCourse != null) {
            return new ResponseEntity<>("Recipe updated successfully", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("Error updating recipe", HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/randomRecipe", method = RequestMethod.POST)
    public ResponseEntity<FullRecipe> getRandomRecipe(@RequestBody RecipeFilters recipeFilters) {
        Map<MainCourse, SideDish> fullRecipe = applicationService.getRecipe(recipeFilters.getMeatless(), recipeFilters.getOneDay());
        Optional<MainCourse> firstKey = fullRecipe.keySet().stream().findFirst();
        return new ResponseEntity<>(new FullRecipe(MainCourseConverter.convertModelToDto(firstKey.get()), SideDishConverter.convertModelToDto(fullRecipe.get(firstKey.get()))), HttpStatus.OK);
    }

    @RequestMapping(value = "/differentSideDish", method = RequestMethod.GET)
    public ResponseEntity<SideDishDto> getDifferentSideDish(@RequestBody SideDishDto sideDishDto) {
        return new ResponseEntity<>(SideDishConverter.convertModelToDto(applicationService.getSideDish(SideDishConverter.convertDtoToModel(sideDishDto))), HttpStatus.OK);
    }
}
