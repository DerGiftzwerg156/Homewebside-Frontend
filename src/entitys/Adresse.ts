export class Adresse{
  plz: number;
  ort: string;
  street: string;
  houseNumber: string;
  addressBonus: string;


  constructor(plz: number, ort: string, street: string, houseNumber: string, addressBonus: string) {
    this.plz = plz;
    this.ort = ort;
    this.street = street;
    this.houseNumber = houseNumber;
    this.addressBonus = addressBonus;
  }
}
