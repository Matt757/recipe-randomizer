package ro.capan.Recipes.converter;

import ro.capan.Recipes.domain.FirstCourse;
import ro.capan.Recipes.dto.FirstCourseDto;

public class FirstCourseConverter {
    public static FirstCourse convertDtoToModel(FirstCourseDto firstCourseDto) {
        FirstCourse firstCourse = new FirstCourse();
        firstCourse.setId(firstCourseDto.getId());
        firstCourse.setName(firstCourseDto.getName());
        firstCourse.setHasMeat(firstCourseDto.getHasMeat());
        firstCourse.setNotes(firstCourseDto.getNotes());
        return firstCourse;
    }

    public static FirstCourseDto convertModelToDto(FirstCourse firstCourse) {
        return new FirstCourseDto(firstCourse.getId(), firstCourse.getName(), firstCourse.getHasMeat(), firstCourse.getNotes());
    }
}
