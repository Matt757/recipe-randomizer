package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.FirstCourse;
import ro.capan.Recipes.domain.SideDish;
import ro.capan.Recipes.repository.FirstCourseRepository;

import java.util.List;
import java.util.Random;

@Service("FirstCourseServiceImplementation")
public class FirstCourseServiceImplementation implements FirstCourseService{
    private final FirstCourseRepository firstCourseRepository;

    @Autowired
    public FirstCourseServiceImplementation(FirstCourseRepository firstCourseRepository) {
        this.firstCourseRepository = firstCourseRepository;
    }

    @Override
    public FirstCourse getFirstCourse(Long firstCourseId) {
        Random randomFirstCourse = new Random();
        if(firstCourseId == 0) {
            List<FirstCourse> menu = firstCourseRepository.findAll();
            System.out.println("RandomSideDish");
            return menu.get(randomFirstCourse.nextInt(menu.size()));
        }
        else {
            List<FirstCourse> menu = firstCourseRepository.findAll();
            FirstCourse firstCourse = menu.get(randomFirstCourse.nextInt(menu.size()));
            System.out.println(firstCourse);
            while (firstCourse.getId().equals(firstCourseId)) {
                firstCourse = menu.get(randomFirstCourse.nextInt(menu.size()));
                System.out.println(firstCourse);
            }
            return firstCourse;
        }
    }
}
