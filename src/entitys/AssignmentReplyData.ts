import {PlaColor} from "./PlaColor";

export class AssignmentReplyData {
  assignmentId: number;
  plaColor: PlaColor;
  status: string;
  title: string;
  description: string;
  filamentLength: number;
  wattHours: number;
  isPayed: boolean;


  constructor(assignmentId: number, plaColor: PlaColor, status: string, title: string, description: string, filamentLength: number, wattHours: number, isPayed: boolean) {
    this.assignmentId = assignmentId;
    this.plaColor = plaColor;
    this.status = status;
    this.title = title;
    this.description = description;
    this.filamentLength = filamentLength;
    this.wattHours = wattHours;
    this.isPayed = isPayed;
  }
}
