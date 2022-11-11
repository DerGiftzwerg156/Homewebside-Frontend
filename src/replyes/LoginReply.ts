export class LoginReply {
  firstName: string;
  token: string;
  role: string;
  message: string;
  status: boolean;


  constructor(firstName: string, token: string, role: string, message: string, status: boolean) {
    this.firstName = firstName;
    this.token = token;
    this.role = role;
    this.message = message;
    this.status = status;
  }
}
