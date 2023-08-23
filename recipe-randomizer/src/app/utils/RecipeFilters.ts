export class RecipeFilters {
  meatless: boolean;
  oneDay: boolean;

  constructor(meatless: boolean, oneDay: boolean) {
    this.meatless = meatless;
    this.oneDay = oneDay;
  }
}
