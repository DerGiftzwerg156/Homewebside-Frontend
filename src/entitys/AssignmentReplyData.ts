import {PlaColor} from "./PlaColor";
import {PaymentStatus} from "./PaymentStatus";
import {AssignmentStatus} from "./AssignmentStatus";
import {Assignment} from "./Assignment";

export class AssignmentReplyData {
  assignmentId: number;
  plaColor: PlaColor;
  status: AssignmentStatus;
  paymentStatus: PaymentStatus;
  title: string;
  description: string;
  filamentWeight: number;
  hours: number;
  price: number;


  constructor(assignmentId: number, plaColor: PlaColor, status: AssignmentStatus, paymentStatus: PaymentStatus, title: string, description: string, filamentLength: number, wattHours: number, price: number) {
    this.assignmentId = assignmentId;
    this.plaColor = plaColor;
    this.status = status;
    this.paymentStatus = paymentStatus;
    this.title = title;
    this.description = description;
    this.filamentWeight = filamentLength;
    this.hours = wattHours;
    this.price = price
  }
}
