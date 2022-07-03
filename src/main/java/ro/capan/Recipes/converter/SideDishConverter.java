package ro.capan.Recipes.converter;

import ro.capan.Recipes.domain.SideDish;
import ro.capan.Recipes.dto.SideDishDto;

public class SideDishConverter {
    public static SideDish convertDtoToModel(SideDishDto sideDishDto) {
        SideDish sideDish = new SideDish();
        sideDish.setId(sideDishDto.getId());
        sideDish.setName(sideDishDto.getName());
        sideDish.setHasMeat(sideDishDto.getHasMeat());
        sideDish.setNotes(sideDishDto.getNotes());
        return sideDish;
    }

    public static SideDishDto convertModelToDto(SideDish sideDish) {
        if (sideDish != null) {
            return new SideDishDto(sideDish.getId(), sideDish.getName(), sideDish.getHasMeat(), sideDish.getNotes());
        }
        return null;
    }
}
