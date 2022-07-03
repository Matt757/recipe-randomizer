package ro.capan.Recipes.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ro.capan.Recipes.dto.MainCourseDto;
import ro.capan.Recipes.dto.SideDishDto;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FullRecipe {
    private MainCourseDto mainCourseDto;
    private SideDishDto sideDishDto;
}
