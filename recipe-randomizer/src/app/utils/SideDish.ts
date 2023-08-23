export class SideDish {
  id: number;
  name: string;
  hasMeat: boolean;
  notes: string;

  constructor(id?: number, name?: string, hasMeat?: boolean, notes?: string) {
    this.id = id??0;
    this.name = name??'';
    this.hasMeat = hasMeat??true;
    this.notes = notes??'';
  }
}
