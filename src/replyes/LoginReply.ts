import {User} from "../entitys/User";

export class LoginReply {
  user: User;
  private message: string;
  status: boolean;


  constructor(user: User, message: string, status: boolean) {
    this.user = user;
    this.message = message;
    this.status = status;
  }
}
