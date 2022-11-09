export class LoginDataRequest{
  private mail: string
  private password: string


  constructor(mail: string, password: string) {
    this.mail = mail;
    this.password = password;
  }
}
