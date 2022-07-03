package ro.capan.Recipes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.capan.Recipes.domain.SideDish;

public interface SideDishRepository extends JpaRepository<SideDish, Long> {
}
