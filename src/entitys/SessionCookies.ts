export class SessionCookies {
  private readonly _name: string;
  private readonly _mail: string;
  private readonly _password: string;
  private readonly _role: string;

  constructor(name: string, mail: string, password: string, role: string) {
    this._name = name;
    this._mail = mail;
    this._password = password;
    this._role = role;
  }


  get name(): string {
    return this._name;
  }

  get mail(): string {
    return this._mail;
  }

  get password(): string {
    return this._password;
  }

  get role(): string {
    return this._role;
  }
}
