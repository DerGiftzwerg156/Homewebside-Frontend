import {Assignment} from "../entitys/Assignment";
import {Reply} from "./Reply";

export class AssignmentsReply {
  assignments: Assignment[];
  reply: Reply;


  constructor(assignments: Assignment[], reply: Reply) {
    this.assignments = assignments;
    this.reply = reply;
  }
}
