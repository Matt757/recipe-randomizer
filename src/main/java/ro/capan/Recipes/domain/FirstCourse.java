package ro.capan.Recipes.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="first_course")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FirstCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    @Column(name = "has_meat")
    private Boolean hasMeat;
    private String notes;
}
