import {User} from "../entitys/User";

export class LoginReply {
  private user: User;
  private message: string;
  private status: boolean;


  constructor(user: User, message: string, status: boolean) {
    this.user = user;
    this.message = message;
    this.status = status;
  }
}
