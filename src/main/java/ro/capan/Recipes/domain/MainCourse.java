package ro.capan.Recipes.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="main_course")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MainCourse implements Cloneable{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    @Column(name = "has_meat")
    private Boolean hasMeat;
    private String notes;
    @Column(name = "number_of_days")
    private Integer numberOfDays;
    @Column(name = "last_cooked")
    private LocalDate lastCooked;
    @Column(name = "requires_side_dish")
    private Boolean requiresSideDish;

    @Override
    public MainCourse clone()
    {
        return new MainCourse(this.id, this.name, this.hasMeat, this.notes, this.numberOfDays, this.lastCooked, this.requiresSideDish);
    }
}
