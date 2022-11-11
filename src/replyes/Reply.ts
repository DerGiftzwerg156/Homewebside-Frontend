export class Reply{
  public message: string;
  public status: boolean;


  constructor(message: string, status: boolean) {
    this.message = message;
    this.status = status;
  }
}
