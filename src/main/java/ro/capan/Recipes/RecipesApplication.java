package ro.capan.Recipes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class RecipesApplication {

	public static void main(String[] args) {
		Date date = new Date();

		SpringApplication.run(RecipesApplication.class, args);
	}

}
