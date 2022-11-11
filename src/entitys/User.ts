export class User {
  userId: number;
  firstName: string;
  lastName: string;
  mail: string;
  password: number;
  role: string;
  token: string;

  constructor(userId: number, firstName: string, lastName: string, mail: string, password: number, role: string, token: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
    this.role = role;
    this.token = token;
  }
}
