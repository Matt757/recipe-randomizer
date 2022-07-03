package ro.capan.Recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.capan.Recipes.domain.MainCourse;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<MainCourse, Long> {
    List<MainCourse> findRecipesByHasMeat(Boolean hasMeat);
    List<MainCourse> findRecipesByNumberOfDays(Integer numberOfDays);
}
