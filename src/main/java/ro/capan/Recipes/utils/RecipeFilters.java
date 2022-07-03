package ro.capan.Recipes.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RecipeFilters {
    private Boolean meatless;
    private Boolean oneDay;
}
