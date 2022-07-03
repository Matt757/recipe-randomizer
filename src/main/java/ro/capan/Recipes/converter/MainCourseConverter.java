package ro.capan.Recipes.converter;

import ro.capan.Recipes.domain.MainCourse;
import ro.capan.Recipes.dto.MainCourseDto;

import java.time.LocalDate;

public class MainCourseConverter {
    public static MainCourse convertDtoToModel(MainCourseDto mainCourseDto) {
        return new MainCourse(mainCourseDto.getId(), mainCourseDto.getName(), mainCourseDto.getHasMeat(), mainCourseDto.getNotes(), mainCourseDto.getNumberOfDays(), LocalDate.parse(mainCourseDto.getLastCooked()), mainCourseDto.getRequiresSideDish());
    }

    public static MainCourseDto convertModelToDto(MainCourse mainCourse) {
        return new MainCourseDto(mainCourse.getId(), mainCourse.getName(), mainCourse.getHasMeat(), mainCourse.getNotes(), mainCourse.getNumberOfDays(), mainCourse.getLastCooked().toString(), mainCourse.getRequiresSideDish());
    }
}
