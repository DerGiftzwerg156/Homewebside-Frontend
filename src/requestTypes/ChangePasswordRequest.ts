export class ChangePasswordRequest{
  token: string
  oldPassword: string
  newPassword: string


  constructor(token: string, oldPassword: string, newPassword: string) {
    this.token = token;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
  }
}
