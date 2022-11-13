export class PlaColor{
  plaColorId: number;
  color: string;
  isAvailable: boolean;


  constructor(plaColorId: number, color: string, isAvailable: boolean) {
    this.plaColorId = plaColorId;
    this.color = color;
    this.isAvailable = isAvailable;
  }
}
