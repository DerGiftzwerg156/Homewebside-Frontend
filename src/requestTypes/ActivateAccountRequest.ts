export class ActivateAccountRequest {
  verificationCode: string


  constructor(verificationCode: string) {
    this.verificationCode = verificationCode;
  }
}
