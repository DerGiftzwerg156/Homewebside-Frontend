export class RegisterDataRequest {
  private firstName: string;
  private lastName: string;
  private mail: string;
  private password: string;

  constructor(firstName:string,lastName:string, mail: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
  }
}
