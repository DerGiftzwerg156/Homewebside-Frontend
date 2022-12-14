import {Reply} from "./Reply";

export class StatusesReply {

  assignmentStatus: any;
  paymentStatus: any;
  reply: Reply;


  constructor(assignmentStatus: any, paymentStatus: any, reply: Reply) {
    this.assignmentStatus = assignmentStatus;
    this.paymentStatus = paymentStatus;
    this.reply = reply;
  }
}
