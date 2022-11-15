export class PaymentStatus{
  paymentStatusId: number;
  paymentStatus: string;
  paymentStatusCode: number;


  constructor(paymentStatusId: number, paymentStatus: string, paymentStatusCode: number) {
    this.paymentStatusId = paymentStatusId;
    this.paymentStatus = paymentStatus;
    this.paymentStatusCode = paymentStatusCode;
  }
}
