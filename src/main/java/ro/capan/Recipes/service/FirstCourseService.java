package ro.capan.Recipes.service;

import ro.capan.Recipes.domain.FirstCourse;

import java.util.List;

public interface FirstCourseService {
    FirstCourse getFirstCourse(Long firstCourseId);

    FirstCourse update(FirstCourse firstCourse);

    List<FirstCourse> getAllFirstCourses();

    void deleteFirstCourseById(long id);

    void addFirstCourse(FirstCourse firstCourse);

    FirstCourse getRandomFirstCourse();
}
