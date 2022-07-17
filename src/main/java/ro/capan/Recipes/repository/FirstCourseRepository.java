package ro.capan.Recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.capan.Recipes.domain.FirstCourse;

@Repository
public interface FirstCourseRepository extends JpaRepository<FirstCourse, Long> {
}
