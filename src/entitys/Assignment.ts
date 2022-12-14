import {User} from "./User";
import {AssignmentStatus} from "./AssignmentStatus";

export class Assignment {
  assignmentId: number;
  user: any;
  plaColor: any;
  status: AssignmentStatus;
  title: string;
  description: string;
  filamentLength: number;
  wattHours: number;
  isPayed: boolean;


  constructor(assignmentId: number, user: any, plaColor: any, status: AssignmentStatus, title: string, description: string, filamentLength: number, wattHours: number, isPayed: boolean) {
    this.assignmentId = assignmentId;
    this.user = user;
    this.plaColor = plaColor;
    this.status = status;
    this.title = title;
    this.description = description;
    this.filamentLength = filamentLength;
    this.wattHours = wattHours;
    this.isPayed = isPayed;
  }
}
