import {PlaColor} from "./PlaColor";
import {PaymentStatus} from "./PaymentStatus";
import {AssignmentStatus} from "./AssignmentStatus";
import {Assignment} from "./Assignment";
import {DeliveryOption} from "./DeliveryOption";

export class AssignmentReplyData {
  assignmentId: number;
  plaColor: PlaColor;
  status: AssignmentStatus;
  paymentStatus: PaymentStatus;
  title: string;
  description: string;
  infill: number;
  filamentWeight: number;
  hours: number;
  price: number;

  deliveryOption: DeliveryOption


  constructor(assignmentId: number, plaColor: PlaColor, status: AssignmentStatus, paymentStatus: PaymentStatus, title: string, description: string,infill:number, filamentLength: number, wattHours: number, price: number,deliveryOption: DeliveryOption) {
    this.assignmentId = assignmentId;
    this.plaColor = plaColor;
    this.status = status;
    this.paymentStatus = paymentStatus;
    this.title = title;
    this.description = description;
    this.filamentWeight = filamentLength;
    this.hours = wattHours;
    this.price = price;
    this.infill = infill;
    this.deliveryOption = deliveryOption;
  }
}
