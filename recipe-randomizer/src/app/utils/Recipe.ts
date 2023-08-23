import {MainCourse} from "./MainCourse";
import {SideDish} from "./SideDish";

export class Recipe {
  mainCourseDto: MainCourse;
  sideDishDto: SideDish;

  constructor(mainCourse?: MainCourse, sideDish?: SideDish) {
    this.mainCourseDto = mainCourse??new MainCourse();
    this.sideDishDto = sideDish??new SideDish();
  }
}
