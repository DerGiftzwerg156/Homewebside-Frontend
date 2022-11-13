export class AssignmentStatus {
  assignmentStatusId: number;
  assignmentStatus: string;
  assignmentStatusCode: number;


  constructor(assignmentStatusId: number, assignmentStatus: string, assignmentStatusCode: number) {
    this.assignmentStatusId = assignmentStatusId;
    this.assignmentStatus = assignmentStatus;
    this.assignmentStatusCode = assignmentStatusCode;
  }
}
