package ro.capan.Recipes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.capan.Recipes.domain.SideDish;
import ro.capan.Recipes.repository.SideDishRepository;

import java.util.List;
import java.util.Random;

@Service("SideDishServiceImplementation")
public class SideDishServiceImplementation implements SideDishService{
    private final SideDishRepository sideDishRepository;

    @Autowired
    SideDishServiceImplementation(SideDishRepository sideDishRepository) {
        this.sideDishRepository = sideDishRepository;
    }

    @Override
    public SideDish getSideDish(SideDish sideDish) {
        Random randomSideDish = new Random();
        if(sideDish == null) {
            List<SideDish> menu = sideDishRepository.findAll();
            System.out.println("RandomSideDish");
            return menu.get(randomSideDish.nextInt(menu.size()));
        }
        else {
            System.out.println(sideDish);
            List<SideDish> menu = sideDishRepository.findAll();
            SideDish sideDish1 = menu.get(randomSideDish.nextInt(menu.size()));
            System.out.println(sideDish1);
            while (sideDish1.equals(sideDish)) {
                sideDish1 = menu.get(randomSideDish.nextInt(menu.size()));
                System.out.println(sideDish1);
            }
            return sideDish1;
        }
    }
}
