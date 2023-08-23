export class MainCourse {
  id: number;
  name: string;
  hasMeat: boolean;
  notes: string;
  numberOfDays: number;
  lastCooked: string;
  requiresSideDish: boolean;

  constructor(id?: number, name?: string, hasMeat?: boolean, notes?: string, numberOfDays?: number, lastCooked?: string, requiresSideDish?: boolean) {
    this.id = id??0;
    this.name = name??'';
    this.hasMeat = hasMeat??true;
    this.notes = notes??'';
    this.numberOfDays = numberOfDays??0;
    this.lastCooked = lastCooked??'';
    this.requiresSideDish = requiresSideDish??true;
  }
}
