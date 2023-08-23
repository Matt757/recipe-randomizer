package ro.capan.Recipes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan({"ro.capan.Recipes"})
// @Import({springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration.class})
public class AppConfig {

}
