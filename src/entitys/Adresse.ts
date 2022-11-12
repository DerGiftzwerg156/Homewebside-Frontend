export class Adresse {
  plz: number | null;
  ort: string | null;
  street: string | null;
  houseNumber: string | null;
  addressBonus: string | null;


  constructor(plz: number | null, ort: string | null, street: string | null, houseNumber: string | null, addressBonus: string | null) {
    this.plz = plz;
    this.ort = ort;
    this.street = street;
    this.houseNumber = houseNumber;
    this.addressBonus = addressBonus;
  }

}
