export class EditAddressRequest{
  token: string
  plz: number
  ort: string
  street: string
  houseNumber: string
  addressBonus: string


  constructor(token: string, plz: number, ort: string, street: string, houseNumber: string, addressBonus: string) {
    this.token = token;
    this.plz = plz;
    this.ort = ort;
    this.street = street;
    this.houseNumber = houseNumber;
    this.addressBonus = addressBonus;
  }
}
