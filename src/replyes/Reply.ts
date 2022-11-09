export class Reply{
  private _message: string;
  private _status: boolean;


  constructor(message: string, status: boolean) {
    this._message = message;
    this._status = status;
  }
}
