import {User} from "../entitys/User";

export class LoginReply {
  private _user: User;
  private _message: string;
  private _loginStatus: boolean;


  constructor(user: User, message: string, loginStatus: boolean) {
    this._user = user;
    this._message = message;
    this._loginStatus = loginStatus;
  }
}
