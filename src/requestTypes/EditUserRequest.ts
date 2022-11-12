export class EditUserRequest{
  token:string
  firstName: string
  lastName: string
  mail: string


  constructor(token: string, firstName: string, lastName: string, mail: string) {
    this.token = token;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
  }
}
