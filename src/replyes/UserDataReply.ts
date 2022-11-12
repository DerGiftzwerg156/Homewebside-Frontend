export class UserDataReply{
  firstName: string
  lastName: string
  mail: string
  role: string
  plz: number
  ort: string
  street: string
  houseNumber: string
  addressBonus: string
  message: string
  status: boolean


  constructor(firstName: string, lastName: string, mail: string, role: string, plz: number, ort: string, street: string, houseNumber: string, addressBonus: string, message: string, status: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.role = role;
    this.plz = plz;
    this.ort = ort;
    this.street = street;
    this.houseNumber = houseNumber;
    this.addressBonus = addressBonus;
    this.message = message;
    this.status = status;
  }
}
