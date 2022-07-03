package ro.capan.Recipes.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class RecipeDto {
    private long id;
    private String name;
    private Boolean hasMeat;
    private String notes;
}
