package ro.capan.Recipes.service;

import ro.capan.Recipes.domain.FirstCourse;

public interface FirstCourseService {
    FirstCourse getFirstCourse(Long firstCourseId);

    FirstCourse update(FirstCourse firstCourse);
}
