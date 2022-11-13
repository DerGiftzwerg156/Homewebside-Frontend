import {Assignment} from "../entitys/Assignment";
import {Reply} from "./Reply";
import {AssignmentReplyData} from "../entitys/AssignmentReplyData";

export class AssignmentsReply {
  assignments: AssignmentReplyData[];
  reply: Reply;


  constructor(assignments: Assignment[], reply: Reply) {
    this.assignments = assignments;
    this.reply = reply;
  }
}
