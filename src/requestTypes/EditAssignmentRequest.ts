import {AssignmentReplyData} from "../entitys/AssignmentReplyData";
import {StandardRequest} from "./StandardRequest";

export class EditAssignmentRequest {

  assignmentId: number;
  hours: number;
  filamentLength: number;

  statusCode: number;

  request: StandardRequest;


  constructor(assignmentId: number, hours: number, filamentLength: number, statusCode: number, request: StandardRequest) {
    this.assignmentId = assignmentId;
    this.hours = hours;
    this.filamentLength = filamentLength;
    this.statusCode = statusCode;
    this.request = request;
  }
}
