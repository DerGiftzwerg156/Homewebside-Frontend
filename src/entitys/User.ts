export class User {
  userId: number;
  firstName: string;
  lastName: string;
  mail: string;
  password: number;
  role: string;


  constructor(userId: number, firstName: string, lastName: string, mail: string, password: number, role: string) {
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
    this.role = role;
  }
}
