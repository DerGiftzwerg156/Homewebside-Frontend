export class GenerellRequest {
  token: string;
  data: any;


  constructor(token: string, data: any) {
    this.token = token;
    this.data = data;
  }
}
