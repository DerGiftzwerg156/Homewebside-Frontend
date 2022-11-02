export class RegisterData {
  mail: string;
  username: string;
  password: string;

  constructor(mail: string, username: string, password: string) {
    this.mail = mail;
    this.username = username;
    this.password = password;
  }
}
